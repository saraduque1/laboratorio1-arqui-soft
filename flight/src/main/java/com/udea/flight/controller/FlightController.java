package com.udea.flight.controller;

import com.udea.flight.model.Flight;
import com.udea.flight.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {
    private final FlightService flightService;

    @Autowired
    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }


    @RequestMapping(path = "/date", method = RequestMethod.GET)
    public List<List<Flight>> searchByDate(
            @RequestParam(name = "startDate") String startDate,
            @RequestParam(name = "endDate") String endDate){
        LocalDate parsedStartDate = LocalDate.parse(startDate);
        LocalDate parsedEndDate = LocalDate.parse(endDate);
        return flightService.searchByDates(parsedStartDate, parsedEndDate);
    }

    @RequestMapping(path = "/airline/{airline}",method = RequestMethod.GET)
    public List<List<Flight>> searchByAirline(
            @PathVariable(name = "airline") String airline){
        return flightService.searchByAirline(airline);
    }

    @RequestMapping(path = "/price",method = RequestMethod.GET)
    public List<List<Flight>> searchByPrice(
            @RequestParam(name = "min") int min,
            @RequestParam(name = "max") int max){
        return flightService.searchByPrice(min, max);
    }

    @RequestMapping(path = "/origin/{origin}",method = RequestMethod.GET)
    public List<List<Flight>> searchByOrigin(
            @PathVariable(name = "origin") String origin){
        return flightService.searchByOrigin(origin);
    }

    @RequestMapping(path = "/destination/{destination}",method = RequestMethod.GET)
    public List<List<Flight>> searchByDestination(
            @PathVariable(name = "destination") String destination){
        return flightService.searchByDestination(destination);
    }
}
