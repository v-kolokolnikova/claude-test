package com.womenintech.controller;

import com.womenintech.model.News;
import com.womenintech.service.NewsService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping
    public List<News> getAll() {
        return newsService.getAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<News> getById(@PathVariable Long id) {
        return newsService.getById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }
}
