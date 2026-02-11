package com.womenintech.config;

import com.womenintech.model.Career;
import com.womenintech.model.HistoricalFact;
import com.womenintech.model.News;
import com.womenintech.repository.CareerRepository;
import com.womenintech.repository.HistoricalFactRepository;
import com.womenintech.repository.NewsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class DataInitializer implements CommandLineRunner {

    private final HistoricalFactRepository historicalFactRepository;
    private final CareerRepository careerRepository;
    private final NewsRepository newsRepository;

    public DataInitializer(HistoricalFactRepository historicalFactRepository,
                           CareerRepository careerRepository,
                           NewsRepository newsRepository) {
        this.historicalFactRepository = historicalFactRepository;
        this.careerRepository = careerRepository;
        this.newsRepository = newsRepository;
    }

    @Override
    public void run(String... args) {
        initHistoricalFacts();
        initCareers();
        initNews();
    }

    private void initHistoricalFacts() {
        if (historicalFactRepository.count() > 0) {
            return;
        }

        historicalFactRepository.save(new HistoricalFact(
                "Ada Lovelace",
                "Premi\u00e8re programmeuse de l'histoire, a \u00e9crit le premier algorithme destin\u00e9 \u00e0 \u00eatre ex\u00e9cut\u00e9 par une machine (la machine analytique de Charles Babbage).",
                1843,
                null,
                "\"Ada's Algorithm\" by James Essinger"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Grace Hopper",
                "Inventrice du premier compilateur (A-0 System) et contribu\u00e9 \u00e0 la cr\u00e9ation du langage COBOL. Elle a aussi invent\u00e9 le terme \"bug\" en informatique.",
                1952,
                null,
                "Yale University Archives"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Margaret Hamilton",
                "Directrice de l'ing\u00e9nierie logicielle du programme Apollo de la NASA. Son code a permis \u00e0 Apollo 11 d'atterrir sur la Lune.",
                1969,
                null,
                "NASA History Division"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Hedy Lamarr",
                "Actrice et inventrice, a co-invent\u00e9 le saut de fr\u00e9quence, technologie \u00e0 la base du Wi-Fi et du Bluetooth modernes.",
                1942,
                null,
                "Smithsonian Institution"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Katherine Johnson",
                "Math\u00e9maticienne \u00e0 la NASA, ses calculs de trajectoires orbitales ont permis les premiers vols spatiaux habit\u00e9s am\u00e9ricains. Son histoire a \u00e9t\u00e9 racont\u00e9e dans le film \"Les Figures de l'ombre\".",
                1961,
                null,
                "NASA"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Radia Perlman",
                "Inventrice du protocole Spanning Tree (STP), fondamental au fonctionnement d'Internet. Surnomm\u00e9e \"la m\u00e8re d'Internet\".",
                1985,
                null,
                "MIT"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Frances Allen",
                "Premi\u00e8re femme \u00e0 recevoir le prix Turing (le \"Nobel de l'informatique\") pour ses travaux sur l'optimisation des compilateurs.",
                2006,
                null,
                "IBM Research"
        ));

        historicalFactRepository.save(new HistoricalFact(
                "Reshma Saujani",
                "Fondatrice de Girls Who Code, organisation qui a form\u00e9 plus de 500 000 filles au codage informatique.",
                2012,
                null,
                "Girls Who Code Annual Report"
        ));
    }

    private void initCareers() {
        if (careerRepository.count() > 0) {
            return;
        }

        careerRepository.save(new Career(
                "D\u00e9veloppeur/D\u00e9veloppeuse",
                "Cr\u00e9e des applications, sites web et logiciels. \u00c9crit du code dans diff\u00e9rents langages (Python, Java, JavaScript...).",
                "Programmation, R\u00e9solution de probl\u00e8mes, Travail d'\u00e9quipe, Apprentissage continu",
                "35 000 - 65 000 \u20ac / an",
                "Bac+2 \u00e0 Bac+5",
                "code"
        ));

        careerRepository.save(new Career(
                "Ing\u00e9nieur(e) en Intelligence Artificielle",
                "Con\u00e7oit des syst\u00e8mes intelligents capables d'apprendre et de prendre des d\u00e9cisions. Travaille sur le machine learning, le deep learning et le traitement du langage naturel.",
                "Math\u00e9matiques, Python, Machine Learning, Statistiques",
                "45 000 - 80 000 \u20ac / an",
                "Bac+5 (Master ou Doctorat)",
                "psychology"
        ));

        careerRepository.save(new Career(
                "Ing\u00e9nieur(e) Informatique",
                "Con\u00e7oit et d\u00e9veloppe des syst\u00e8mes informatiques complexes. Peut travailler dans le hardware, les r\u00e9seaux, la cybers\u00e9curit\u00e9 ou le cloud computing.",
                "Architecture syst\u00e8mes, R\u00e9seaux, Cybers\u00e9curit\u00e9, Cloud",
                "40 000 - 70 000 \u20ac / an",
                "Bac+5 (\u00c9cole d'ing\u00e9nieurs)",
                "engineering"
        ));

        careerRepository.save(new Career(
                "Web Designer",
                "Cr\u00e9e l'identit\u00e9 visuelle et l'exp\u00e9rience utilisateur des sites web. Combine cr\u00e9ativit\u00e9 artistique et comp\u00e9tences techniques.",
                "UI/UX Design, Figma, Adobe Creative Suite, HTML/CSS",
                "30 000 - 55 000 \u20ac / an",
                "Bac+2 \u00e0 Bac+5",
                "palette"
        ));

        careerRepository.save(new Career(
                "Chef(fe) de Projet IT",
                "Coordonne les \u00e9quipes techniques, g\u00e8re les budgets et planifie les projets. Fait le lien entre les besoins m\u00e9tier et les solutions techniques.",
                "Gestion de projet, Communication, Agile/Scrum, Leadership",
                "40 000 - 70 000 \u20ac / an",
                "Bac+5",
                "groups"
        ));

        careerRepository.save(new Career(
                "Business Analyst",
                "Analyse les besoins des entreprises et traduit ces besoins en sp\u00e9cifications techniques. Aide \u00e0 optimiser les processus gr\u00e2ce \u00e0 la technologie.",
                "Analyse de donn\u00e9es, Communication, SQL, Mod\u00e9lisation de processus",
                "35 000 - 60 000 \u20ac / an",
                "Bac+5",
                "analytics"
        ));
    }

    private void initNews() {
        if (newsRepository.count() > 0) {
            return;
        }

        newsRepository.save(new News(
                "L'IA au f\u00e9minin : de plus en plus de femmes dans la recherche en intelligence artificielle",
                "Selon un rapport de l'UNESCO publi\u00e9 en 2024, la proportion de femmes dans la recherche en IA est pass\u00e9e de 22% \u00e0 30% en cinq ans. Des initiatives comme AI4ALL et Women in AI contribuent \u00e0 cette progression.",
                LocalDate.of(2024, 3, 8),
                null,
                null,
                "UNESCO"
        ));

        newsRepository.save(new News(
                "Gitanjali Rao, 17 ans, nomm\u00e9e plus jeune innovatrice de l'ann\u00e9e par TIME",
                "La jeune scientifique am\u00e9ricaine Gitanjali Rao a d\u00e9velopp\u00e9 plusieurs technologies innovantes, dont un dispositif de d\u00e9tection de plomb dans l'eau et une application contre le cyberharc\u00e8lement.",
                LocalDate.of(2024, 1, 15),
                null,
                null,
                "TIME Magazine"
        ));

        newsRepository.save(new News(
                "Le programme Girls Who Code atteint un million de membres",
                "L'organisation fond\u00e9e par Reshma Saujani a franchi le cap symbolique d'un million de filles form\u00e9es au code informatique \u00e0 travers le monde, avec des programmes dans plus de 20 pays.",
                LocalDate.of(2024, 6, 20),
                null,
                null,
                "Girls Who Code"
        ));

        newsRepository.save(new News(
                "La Commission europ\u00e9enne lance le programme 'Women in Digital'",
                "La Commission europ\u00e9enne a annonc\u00e9 un investissement de 100 millions d'euros pour encourager les femmes \u00e0 poursuivre des carri\u00e8res dans le num\u00e9rique, avec des bourses d'\u00e9tudes et des programmes de mentorat.",
                LocalDate.of(2024, 9, 15),
                null,
                null,
                "Commission europ\u00e9enne"
        ));
    }
}
