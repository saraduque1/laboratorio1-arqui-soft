package com.udea.flight.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateDeserializer;

import java.time.LocalDate;

public class Flight {
    // Attributes
    private int id;
    private String airline;
    private String origin;
    private String destination;
    private int price;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate departureDate;
    @JsonDeserialize(using = LocalDateDeserializer.class)
    private LocalDate arrivalDate;

    // Constructors
    public Flight() {
    }

    public Flight(int id, String airline, String origin, String destination, int price, LocalDate departureDate, LocalDate arrivalDate) {
        this.id = id;
        this.airline = airline;
        this.origin = origin;
        this.destination = destination;
        this.price = price;
        this.departureDate = departureDate;
        this.arrivalDate = arrivalDate;
    }

    // Getters and Setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAirline() {
        return airline;
    }

    public void setAirline(String airline) {
        this.airline = airline;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public LocalDate getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(LocalDate departureDate) {
        this.departureDate = departureDate;
    }

    public LocalDate getArrivalDate() {
        return arrivalDate;
    }

    public void setArrivalDate(LocalDate arrivalDate) {
        this.arrivalDate = arrivalDate;
    }

    @Override
    public String toString() {
        return "Flight{" +
                "id=" + id +
                ", airline='" + airline + '\'' +
                ", origin='" + origin + '\'' +
                ", destination='" + destination + '\'' +
                ", price=" + price +
                ", departureDate=" + departureDate +
                ", arriveDate=" + arrivalDate +
                '}';
    }


}
