package com.example.gridwatch;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;

@RestController
public class IngestController {

    public record IngestReq(
        @NotBlank String assetId,
        @NotNull Instant ts,
        @NotNull Double powerKw,
        Double tempC,
        String status
    ) {}

    @PostMapping("/ingest")

    public ResponseEntity<Void> ingest(@RequestBody IngestReq req) {
        System.out.printf(
            "INGEST %s @ %s power=%.2f temp=%s status=%s%n",
            req.assetId(), 
            req.ts(), 
            req.powerKw(), 
            req.tempC() == null ? "n/a" : req.tempC().toString(),
            req.status());

        return ResponseEntity.accepted().build();
    }
}