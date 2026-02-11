package com.womenintech.service;

import com.womenintech.model.News;
import com.womenintech.repository.NewsRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class NewsService {

    private final NewsRepository newsRepository;

    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<News> getAll() {
        return newsRepository.findAllByOrderByPublishedDateDesc();
    }

    public Optional<News> getById(Long id) {
        return newsRepository.findById(id);
    }
}
