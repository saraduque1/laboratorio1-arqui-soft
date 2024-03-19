package com.udea.flight.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.udea.flight.model.Flight;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.io.InputStream;
import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.function.Function;

@Service
public class FlightService {
    // Json File Route
    // JSON File Path
    private final String FILE_PATH = "/flights.json";

    /**
     * Busca los vuelos que parten entre dos fechas.
     *
     * @param startDate fecha límite inferior.
     * @param endDate fecha límite superior.
     * @return Lista con los vuelos que han sido hallados entre las fechas especificadas.
     */
    public List<List<Flight>> searchByDates(LocalDate startDate, LocalDate endDate) {
        return this.searchAndFilterFlights(flight -> isDateInRange(flight.getDepartureDate(), startDate, endDate));
    }

    /**
     * Busca vuelos según una aerolínea
     *
     * @param airline La aerolína requerida
     * @return Una lista con los vuelos que son hechos por la aerolínea
     */
    public List<List<Flight>> searchByAirline(String airline) {
        return this.searchAndFilterFlights(flight -> Objects.equals(flight.getAirline(), airline));
    }

    /**
     * Busca vuelos que estén dentro de un rango de precios.
     *
     * @param min precio mínimo.
     * @param max precio máximo.
     * @return Lista con los vuelos que cuestan un valor dentro de los límites.
     */
    public List<List<Flight>> searchByPrice(int min, int max) {
        return this.searchAndFilterFlights(flight -> min <= flight.getPrice() && flight.getPrice() <= max);
    }

    /**
     * Busca vuelos según el lugar de origen
     * @param origin origen del vuelo
     * @return lista con los vuelos hallados
     */
    public List<List<Flight>> searchByOrigin(String origin) {
        return this.searchAndFilterFlights(flight -> Objects.equals(flight.getOrigin(), origin));
    }

    /**
     * Busca vuelos segun el lugar de destino.
     *
     * @param destination lugar de destino para buscar los vuelos
     * @return lista con los vuelos hallados
     */
    public List<List<Flight>> searchByDestination(String destination) {
        return this.searchAndFilterFlights(flight -> Objects.equals(flight.getDestination(), destination));
    }

    /**
     * Abre el archivo JSON, obtiene los vuelos que hay en él
     * y luego los filtra con la función con la que se se le haya pasado como argumento.
     *
     * @param customFilter función necesaria para filtrar los vuelos luego de leerlos.
     * @return Una lista con los vuelos hallados luego de haber filtrado.
     */
    private List<List<Flight>> searchAndFilterFlights(Function<Flight,Boolean> customFilter) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            InputStream inputStream = getClass().getResourceAsStream(FILE_PATH);
            if (inputStream != null) {
                Flight[] flights = objectMapper.readValue(inputStream, Flight[].class);
                List<Flight> filteredFlights = Arrays.stream(flights)
                        .filter(customFilter::apply)
                        .toList();
                return List.of(filteredFlights);
            } else return null;
        } catch (IOException e) {
            throw new RuntimeException("Error reading flights data from JSON file", e);
        }
    }

    /**
     * Calcula si la fecha de partida de un vuelo está dentro de las fechas
     * @param departureDate Fecha de partida del vuelo
     * @param startDate Fecha límite inferior
     * @param endDate Fecha límite inferior
     * @return Retorna true si la fecha se encuetra dentro del rando y false si pasa lo contrario
     */
    private boolean isDateInRange(LocalDate departureDate, LocalDate startDate, LocalDate endDate) {
        return !departureDate.isBefore(startDate) && !departureDate.isAfter(endDate);
    }

}
