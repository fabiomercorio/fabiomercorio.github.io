---
layout: page
title: Publications
subtitle: Selected Publications
published: true
full-width: true
---
<link rel="stylesheet" href="https://fabiomercorio.github.io/css/bib-publication-list.css" type="text/css" />
<noscript>
      <!-- bibtex source hidden by default, show it if JS disabled -->
      <style>
      #bibtex { display: block;}
      </style>
</noscript>

I try to keep the following list of publications up to date. Have a look at my [Google Scholar profile](https://scholar.google.com/citations?user=BpjjTu0AAAAJ&hl=it&oi=ao) and [DBLP record](https://dblp.uni-trier.de/pers/hd/m/Mercorio:Fabio.html).

Notice: The copies that can be obtained here are preprints since the copyrights to many of the papers are held by the publishers.

<table id="pubTable" class="display">
</table>
<pre id="bibtex" style="display:none;">


@inproceedings{SAFE,
      title={SAFE: A Sparse Autoencoder-Based Framework for Robust Query Enrichment and Hallucination Mitigation in LLMs}, 
      author={Samir Abdaljalil and Filippo Pallucchini and Andrea Seveso and HASAN KURBAN and Fabio Mercorio and Erchin Serpedin},
      year={2025},
      booktitle={EMNLP 2025 (Findings), The 2025 Conference on Empirical Methods in Natural Language Processing (to appear)} 
}


@inproceedings{RoleVector,
      title={Can Role Vectors Affect LLM Behaviour?}, 
      author={Daniele Poterti and Andrea Seveso and Fabio Mercorio},
      year={2025},
      booktitle={EMNLP 2025 (Findings), The 2025 Conference on Empirical Methods in Natural Language Processing (to appear)} 
}

@InProceedings{IJCAI25_terminator,
      title={Towards the Terminator Economy: Assessing Job Exposure to AI through LLMs}, 
      author={Emilio Colombo and Fabio Mercorio and Mario Mezzanzanica and Antonio Serino},
      year={2025},
      booktitle={IJCAI 2025, the 34th International Joint Conference on Artificial Intelligence (to appear)}

}

@article{ACSUR25,
  author       = {Filippo Pallucchini and 
  				  Lorenzo Malandri and
                  Fabio Mercorio and
                  Mario Mezzanzanica
                  },
  title        = {Lost in Alignment: A Survey on Cross-lingual Alignment Methods for
Contextualised Representation},
	year = {2025},
  journal      = {ACM Computing Survey (to appear)}
}

@article{DBLP:journals/ijdsa/MalandriMMP25,
  author       = {Lorenzo Malandri and
                  Fabio Mercorio and
                  Mario Mezzanzanica and
                  Filippo Pallucchini},
  title        = {SeNSe: embedding alignment via semantic anchors selection},
  journal      = {Int. J. Data Sci. Anal.},
  volume       = {20},
  number       = {1},
  pages        = {167--181},
  year         = {2025},
  url          = {https://doi.org/10.1007/s41060-024-00522-z},
  doi          = {10.1007/S41060-024-00522-Z},
  timestamp    = {Mon, 16 Jun 2025 16:15:15 +0200},
  biburl       = {https://dblp.org/rec/journals/ijdsa/MalandriMMP25.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}

@inproceedings{mercorio2025invalsi,
      title={A Benchmark to Evaluate LLMs’ Proficiency on Italian Student Competencies}, 
      author={Fabio Mercorio and Mario Mezzanzanica and Daniele Potertì and Antonio Serino and Andrea Seveso},
      year={2025},
      booktitle={ECML-PKDD 2025, the European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases (to appear)} 
}


@inproceedings{10.1145/3672608.3707960,
author = {Malandri, Lorenzo and Mercorio, Fabio and Serino, Antonio},
title = {SkiLLMo: Normalized ESCO Skill Extraction through Transformer Models},
year = {2025},
isbn = {9798400706295},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3672608.3707960},
doi = {10.1145/3672608.3707960},
abstract = {In recent years, natural language processing (NLP) technologies have made a significant contribution in addressing a number of labour market tasks. One of the most interesting challenges is the automatic extraction of competences from unstructured texts.This paper presents a pipeline for efficiently extracting and standardizing skills from job advertisements using NLP techniques. The proposed methodology leverages open-source Transformer and Large Language Models to extract skills and map them to the European labour market taxonomy, ESCO.To address the computational challenges of processing lengthy job advertisements, a BERT model was fine-tuned to identify text segments likely containing skills. This filtering step reduces noise and ensures that only relevant content is processed further. The filtered text is then passed to an LLM, which extracts implicit and explicit hard and soft skills through prompt engineering. The extracted skills are subsequently matched with entries in a vector store containing the ESCO taxonomy to achieve standardization.Evaluation by domain experts shows that the pipeline achieves a precision of 91\% for skill extraction, 80\% for skill standardization and a combined overall precision of 79\%. These results demonstrate the effectiveness of the proposed approach in facilitating structured and standardized skill extraction from job postings.},
booktitle = {Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing},
pages = {1969–1978},
numpages = {10},
keywords = {skill extraction, large language models, transformer models, information extraction, labor market},
location = {Catania International Airport, Catania, Italy},
series = {SAC '25}
}

@inproceedings{10.1145/3672608.3707718,
author = {Colombo, Samuele and D'Amico, Simone and Malandri, Lorenzo and Mercorio, Fabio and Seveso, Andrea},
title = {JobSet: Synthetic Job Advertisements Dataset for Labour Market Intelligence},
year = {2025},
isbn = {9798400706295},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3672608.3707718},
doi = {10.1145/3672608.3707718},
abstract = {The use of online services for advertising job positions has grown in the last decade, thanks to the ability of Online Job Advertisements (OJAs) to observe the labour market in near real-time, predict new occupation trends, identify relevant skills, and support policy and decision-making activities. Unsurprisingly, 2023 was declared the Year of Skills by the EU, as skill mismatch is a key challenge for European economies. In such a scenario, machine learning-based approaches have played a key role in classifying job ads and extracting skills according to well-established taxonomies. However, the effectiveness of ML depends on access to annotated job advertisement datasets, which are often limited and require time-consuming manual annotation. The lack of OJA annotated benchmarks representative of the real online OJA and skills distributions is currently limiting advances in skill intelligence. To deal with this, we propose JobGen, which leverages Large Language Models (LLMs) to generate synthetic OJAs. We use real OJAs collected from an EU project and the ESCO taxonomy to represent job market distributions accurately. JobGen enhances data diversity and semantic alignment, addressing common issues in synthetic data generation. The resulting dataset, JobSet, provides a valuable resource for tasks like skill extraction and job matching and is openly available to the community1.},
booktitle = {Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing},
pages = {928–935},
numpages = {8},
keywords = {large language models, benchmark, labour market},
location = {Catania International Airport, Catania, Italy},
series = {SAC '25}
}

@inproceedings{10.1145/3672608.3707906,
author = {D'Amico, Simone and De Santo, Alessia and Mezzanzanica, Mario and Mercorio, Fabio},
title = {Taxonomy Expansion through Collaborative LLM Mapping},
year = {2025},
isbn = {9798400706295},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3672608.3707906},
doi = {10.1145/3672608.3707906},
abstract = {Hierarchical taxonomies are crucial for organizing concepts across domains like healthcare, finance, and economics. However, maintaining their accuracy requires continuous updates, often demanding expert input. To address this, we propose TAXMAP (TAxonomy eXpansion through Collaborative LLM MAPping), a system that autonomously expands hierarchical taxonomies using contextual word embeddings and three generative models, with a human validation step ensuring relevance. Implemented within an EU initiative to enhance the European Skill taxonomy (ESCO), our framework processed over 40,000 digital terms gathered from the Web, aligning ESCO skills with labor market needs. This effort resulted in 924 proposed terms, 757 of which were validated by experts as correct. By leveraging large language models (LLMs) as encoders, TAXMAP reduces errors, ensures high precision, and minimizes human effort. Compared to a baseline based on ESCO's hierarchy, our system achieved an 81\% Positive Predictive Value (PPV) when combining all three models.},
booktitle = {Proceedings of the 40th ACM/SIGAPP Symposium on Applied Computing},
pages = {1961–1968},
numpages = {8},
keywords = {automated taxonomy enrichment, labour market intelligence, large language models, NLP},
location = {Catania International Airport, Catania, Italy},
series = {SAC '25}
}

@InProceedings{10.1007/978-3-031-74633-8_28,
author="Haardt, Vittorio
and Malandri, Lorenzo
and Mercorio, Fabio
and Porcelli, Luca",
editor="Meo, Rosa
and Silvestri, Fabrizio",
title="SEEDOT: Tool for Enhancing Sentiment Lexicon with Machine Learning",
booktitle="Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
year="2025",
publisher="Springer Nature Switzerland",
address="Cham",
pages="390--402",
isbn="978-3-031-74633-8"
}


@INPROCEEDINGS{10825415,
  author={D’Amico, Simone and De Santo, Alessia and Mercorio, Fabio and Mezzanzanica, Mario},
  booktitle={2024 IEEE International Conference on Big Data (BigData)}, 
  title={Enriching Skill Taxonomies through Vector Space Models}, 
  year={2024},
  volume={},
  number={},
  pages={2297-2302},
  doi={10.1109/BigData62323.2024.10825415}}


@inproceedings{seveso-etal-2025-italic,
    title = "ITALIC: An Italian Culture-Aware Natural Language Benchmark",
    author = "Seveso, Andrea  and Poterti, Daniele  and Federici, Edoardo  and Mezzanzanica, Mario  and Mercorio, Fabio",
    booktitle = "Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers)",
    month = apr,
    year = "2025",
    address = "Albuquerque, New Mexico",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.naacl-long.68/",
    pages = "1469--1478",
    ISBN = "979-8-89176-189-6"}

@inproceedings{DBLP:conf/clic-it/MercorioPSS24,
  author       = {Fabio Mercorio and
                  Daniele Poterti and
                  Antonio Serino and
                  Andrea Seveso},
  editor       = {Felice Dell'Orletta and
                  Alessandro Lenci and
                  Simonetta Montemagni and
                  Rachele Sprugnoli},
  title        = {BEEP - BEst DrivEr's License Performer: A Calamita Challenge},
  booktitle    = {Proceedings of the Tenth Italian Conference on Computational Linguistics
                  (CLiC-it 2024), Pisa, Italy, December 4-6, 2024},
  series       = {CEUR Workshop Proceedings},
  volume       = {3878},
  publisher    = {CEUR-WS.org},
  year         = {2024},
  url          = {https://ceur-ws.org/Vol-3878/135\_calamita\_short.pdf},
  timestamp    = {Tue, 07 Jan 2025 17:28:28 +0100},
  biburl       = {https://dblp.org/rec/conf/clic-it/MercorioPSS24.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}

@inproceedings{malandri-etal-2025-fin,
    title = "{RE}-{FIN}: Retrieval-based Enrichment for Financial data",
    author = "Malandri, Lorenzo  and
      Mercorio, Fabio  and
      Mezzanzanica, Mario  and
      Pallucchini, Filippo",
    editor = "Rambow, Owen  and
      Wanner, Leo  and
      Apidianaki, Marianna  and
      Al-Khalifa, Hend  and
      Eugenio, Barbara Di  and
      Schockaert, Steven  and
      Darwish, Kareem  and
      Agarwal, Apoorv",
    booktitle = "Proceedings of the 31st International Conference on Computational Linguistics: Industry Track",
    month = jan,
    year = "2025",
    address = "Abu Dhabi, UAE",
    publisher = "Association for Computational Linguistics",
    url = "https://aclanthology.org/2025.coling-industry.62/",
    pages = "751--759",
    abstract = "Enriching sentences with knowledge from qualitative sources benefits various NLP tasks and enhances the use of labeled data in model training. This is crucial for Financial Sentiment Analysis (FSA), where texts are often brief and contain implied information. We introduce RE-FIN (Retrieval-based Enrichment for FINancial data), an automated system designed to retrieve information from a knowledge base to enrich financial sentences, making them more knowledge-dense and explicit. RE-FIN generates propositions from the knowledge base and employs Retrieval-Augmented Generation (RAG) to augment the original text with relevant information. A large language model (LLM) rewrites the original sentence, incorporating this data. Since the LLM does not create new content, the risk of hallucinations is significantly reduced. The LLM generates multiple new sentences using different relevant information from the knowledge base; we developed an algorithm to select one that best preserves the meaning of the original sentence while avoiding excessive syntactic similarity. Results show that enhanced sentences present lower perplexity than the original ones and improve performances on FSA."
}

@inproceedings{DSAA24,
  title={Alignment of Multilingual Embeddings to Estimate Job Similarities in Online Labour Market},
  author={Simone D'Amico and Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Filippo Pallucchini},
  booktitle={The 11th IEEE International Conference on Data Science and Advanced Analytics (DSAA)},
   pages        = {1--10},
  url          = {https://doi.org/10.1109/DSAA61799.2024.10722820},
  doi          = {10.1109/DSAA61799.2024.10722820},
  timestamp    = {Wed, 06 Nov 2024 16:56:23 +0100},
  biburl       = {https://dblp.org/rec/conf/dsaa/DAmicoMMMP24.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org},
  year={2024}
}

@inproceedings{DBLP:conf/mai-xai/AndreaMMNS24,
  author       = {Ermellino Andrea and
                  Lorenzo Malandri and
                  Fabio Mercorio and
                  Navid Nobani and
                  Antonio Serino},
  title        = {An approach to Evaluative AI through Large Language Models},
  booktitle    = {MAI-XAI - ECAI},
  pages        = {1--15},
  year         = {2024},
  url          = {https://ceur-ws.org/Vol-3803/paper1.pdf},
  timestamp    = {Fri, 08 Nov 2024 15:21:04 +0100},
  biburl       = {https://dblp.org/rec/conf/mai-xai/AndreaMMNS24.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}

@misc{colombo2024terminatoreconomyassessingjob,
      title={Towards the Terminator Economy: Assessing Job Exposure to AI through LLMs}, 
      author={Emilio Colombo and Fabio Mercorio and Mario Mezzanzanica and Antonio Serino},
      year={2024},
      eprint={2407.19204},
      archivePrefix={arXiv},
      primaryClass={cs.CY},
      url={https://arxiv.org/abs/2407.19204}, 
}

@article{malandri2024sense,
  title={SeNSe: embedding alignment via semantic anchors selection},
  author={Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Filippo Pallucchini},
  journal={International Journal of Data Science and Analytics},
  pages={1--15},
  year={2024},
  url = {https://link.springer.com/article/10.1007/s41060-024-00522-z},
  publisher={Springer}
}

@inproceedings{castelnovo2024augmenting,
  title={Augmenting XAI with LLMs: A Case Study in Banking Marketing Recommendation},
  author={Castelnovo, Alessandro and Depalmas, Roberto and Mercorio, Fabio and Mombelli, Nicolò and Potertì, Daniele and Serino, Antonio and Seveso, Andrea and Sorrentino, Salvatore and Viola, Laura},
  booktitle={World Conference on Explainable Artificial Intelligence},
  pages={211--229},
  year={2024},
  organization={Springer}
}

@misc{cambria2024xaimeetsllmssurvey,
      title={XAI meets LLMs: A Survey of the Relation between Explainable AI and Large Language Models}, 
      author={Erik Cambria and Lorenzo Malandri and Fabio Mercorio and Navid Nobani and Andrea Seveso},
      year={2024},
      eprint={2407.15248},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2407.15248}, 
}

@misc{mercorio2024disceautdeficereevaluating,
      title={Disce aut Deficere: Evaluating LLMs Proficiency on the INVALSI Italian Benchmark}, 
      author={Fabio Mercorio and Mario Mezzanzanica and Daniele Potertì and Antonio Serino and Andrea Seveso},
      year={2024},
      eprint={2406.17535},
      archivePrefix={arXiv},
      primaryClass={cs.CL},
      url={https://arxiv.org/abs/2406.17535}, 
}


@InProceedings{10.1007/978-3-031-44070-0_17,
author="Castelnovo, Alessandro and Inverardi, Nicole and Malandri, Lorenzo and Mercorio, Fabio and Mezzanzanica, Mario and Seveso, Andrea",
editor="Longo, Luca",
title="Leveraging Group Contrastive Explanations for Handling Fairness",
booktitle="Explainable Artificial Intelligence",
year="2023",
publisher="Springer Nature Switzerland",
address="Cham",
pages="332--345",
abstract="With the increasing adoption of Artificial Intelligence (AI) for decision-making processes by companies, developing systems that behave fairly and do not discriminate against specific groups of people becomes crucial. Reaching this objective requires a multidisciplinary approach that includes domain experts, data scientists, philosophers, and legal experts, to ensure complete accountability for algorithmic decisions. In such a context, Explainable AI (XAI) plays a key role in enabling professionals from different backgrounds to comprehend the functioning of automatized decision-making processes and, consequently, being able to identify the presence of fairness issues. This paper presents FairX, an innovative approach that uses Group-Contrastive (G-contrast) explanations to estimate whether different decision criteria apply among distinct population subgroups. FairX provides actionable insights through a comprehensive explanation of the decision-making process, enabling businesses to: detect the presence of direct discrimination on the target variable and choose the most appropriate fairness framework.",
isbn="978-3-031-44070-0"
}


@article{DBLP:journals/cogcom/AscariGMMM24,
  author       = {Roberto Ascari and
                  Anna Giabelli and
                  Lorenzo Malandri and
                  Fabio Mercorio and
                  Mario Mezzanzanica},
  title        = {A Fistful of Vectors: {A} Tool for Intrinsic Evaluation of Word Embeddings},
  journal      = {Cogn. Comput.},
  volume       = {16},
  number       = {3},
  pages        = {949--963},
  year         = {2024},
  url          = {https://doi.org/10.1007/s12559-023-10235-3},
  doi          = {10.1007/S12559-023-10235-3},
  timestamp    = {Wed, 19 Jun 2024 08:52:47 +0200},
  biburl       = {https://dblp.org/rec/journals/cogcom/AscariGMMM24.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}

 
@InProceedings{10.1007/978-3-031-44070-0_17,
author="Alessandro Castelnovo and Nicole Inverardi and Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Andrea Seveso",
title="Leveraging Group Contrastive Explanations for Handling Fairness",
booktitle="Explainable Artificial Intelligence",
year="2023",
publisher="Springer Nature Switzerland",
address="Cham",
pages="332--345",
abstract="With the increasing adoption of Artificial Intelligence (AI) for decision-making processes by companies, developing systems that behave fairly and do not discriminate against specific groups of people becomes crucial. Reaching this objective requires a multidisciplinary approach that includes domain experts, data scientists, philosophers, and legal experts, to ensure complete accountability for algorithmic decisions. In such a context, Explainable AI (XAI) plays a key role in enabling professionals from different backgrounds to comprehend the functioning of automatized decision-making processes and, consequently, being able to identify the presence of fairness issues. This paper presents FairX, an innovative approach that uses Group-Contrastive (G-contrast) explanations to estimate whether different decision criteria apply among distinct population subgroups. FairX provides actionable insights through a comprehensive explanation of the decision-making process, enabling businesses to: detect the presence of direct discrimination on the target variable and choose the most appropriate fairness framework.",
isbn="978-3-031-44070-0"
}



@article{MERLIN,
title = {Model-contrastive explanations through symbolic reasoning},
journal = {Decision Support Systems},
volume = {176},
pages = {114040},
year = {2024},
issn = {0167-9236},
doi = {https://doi.org/10.1016/j.dss.2023.114040},
url = {https://www.sciencedirect.com/science/article/pii/S016792362300115X},
author = {Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Andrea Seveso},
keywords = {eXplainable AI, Contrastive explanation methods for XAI, Post-hoc explainability, XAI Interpretability},
abstract = {Explaining how two machine learning classification models differ in their behaviour is gaining significance in eXplainable AI, given the increasing diffusion of learning-based decision support systems. Human decision-makers deal with more than one machine learning model in several practical situations. Consequently, the importance of understanding how two machine learning models work beyond their prediction performances is key to understanding their behaviour, differences, and likeness. Some attempts have been made to address these problems, for instance, by explaining text classifiers in a time-contrastive fashion. In this paper, we present MERLIN, a novel eXplainable AI approach that provides contrastive explanations of two machine learning models, introducing the concept of model-contrastive explanations. We propose an encoding that allows MERLIN to work with both text and tabular data and with mixed continuous and discrete features. To show the effectiveness of our approach, we evaluate it on an extensive set of benchmark datasets. MERLIN is also implemented as a python-pip package.}
}

@article{XAIsurvey,
author = {Erik Cambria and Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Navid Nobani},
title = {A survey on XAI and natural language explanations},
journal = {Information Processing \& Management},
volume = {60},
number = {1},
pages = {103111},
year = {2023},
issn = {0306-4573},
doi = {https://doi.org/10.1016/j.ipm.2022.103111},
url = {https://www.sciencedirect.com/science/article/pii/S0306457322002126},
}

@inproceedings{DBLP:conf/ic3k/DAmicoMMM23,
  author       = {Simone D'Amico and
                  Lorenzo Malandri and
                  Fabio Mercorio and
                  Mario Mezzanzanica},
  title        = {KRAKEN: A Novel Semantic-Based Approach for Keyphrases Extraction},
  booktitle    = {Proceedings of the 15th International Joint Conference on Knowledge
                  Discovery, Knowledge Engineering and Knowledge Management},
  pages        = {289--297},
  year         = {2023},
  url          = {https://doi.org/10.5220/0012179500003598},
  doi          = {10.5220/0012179500003598}
}

@inproceedings{DBLP:conf/bias/AlimondaCCMM23,
  author       = {Nicola Alimonda and
                  Alessandro Castelnovo and
                  Riccardo Crupi and
                  Fabio Mercorio and
                  Mario Mezzanzanica},
  title        = {Preserving Utility in Fair Top-k Ranking with Intersectional Bias},
  booktitle    = {Advances in Bias and Fairness in Information Retrieval - 4th International
                  Workshop, {BIAS} 2023, Dublin, Ireland, April 2, 2023, Revised Selected
                  Papers},
  series       = {Communications in Computer and Information Science},
  volume       = {1840},
  pages        = {59--73},
  publisher    = {Springer},
  year         = {2023},
  url          = {https://doi.org/10.1007/978-3-031-37249-0_5},
  doi          = {10.1007/978-3-031-37249-0\_5},
  timestamp    = {Tue, 18 Jul 2023 17:49:11 +0200},
  biburl       = {https://dblp.org/rec/conf/bias/AlimondaCCMM23.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}

@ARTICLE{Guo202211,
	author = {Guo, Yuchen and Langer, Christina and Mercorio, Fabio and Trentini, Francesco},
	title = {Skills Mismatch, Automation, and Training: Evidence from 17 European Countries Using Survey Data and Online Job Ads},
	year = {2022},
	journal = {CESifo Forum},
	volume = {23},
	number = {5},
	pages = {11 – 15},
	url = {https://www.scopus.com/inward/record.uri?eid=2-s2.0-85141179931&partnerID=40&md5=35bc2b2cd2e622ad47533b7fa0adc699},
	type = {Article}
}

@Inbook{Mezzanzanica2020,
author="Mezzanzanica, Mario
and Mercorio, Fabio",
editor="Zomaya, Albert
and Taheri, Javid
and Sakr, Sherif",
title="Big Data as Fuel of Skill Intelligence",
bookTitle="Encyclopedia of Big Data Technologies",
year="2020",
publisher="Springer International Publishing",
address="Cham",
pages="1--14",
isbn="978-3-319-63962-8",
doi="10.1007/978-3-319-63962-8_276-2",
url="https://doi.org/10.1007/978-3-319-63962-8_276-2"
}


@inproceedings{ijcai2022-858,
  title     = {The Good, the Bad, and the Explainer: A Tool for Contrastive Explanations of Text Classifiers},
  author    = {Malandri, Lorenzo and Mercorio, Fabio and Mezzanzanica, Mario and Nobani, Navid and Seveso, Andrea},
  booktitle = {Proceedings of the Thirty-First International Joint Conference on
               Artificial Intelligence, {IJCAI-22}},
  publisher = {International Joint Conferences on Artificial Intelligence Organization},
  editor    = {Lud De Raedt},
  pages     = {5936--5939},
  year      = {2022},
  month     = {7},
  note      = {Demo Track}
  doi       = {10.24963/ijcai.2022/858},
  url       = {https://doi.org/10.24963/ijcai.2022/858},
}



@article{DBLP:journals/cogcom/MalandriMMN23,
  author       = {Lorenzo Malandri and
                  Fabio Mercorio and
                  Mario Mezzanzanica and
                  Navid Nobani},
  title        = {ConvXAI: a System for Multimodal Interaction with Any Black-box Explainer},
  journal      = {Cogn. Comput.},
  volume       = {15},
  number       = {2},
  pages        = {613--644},
  year         = {2023},
  url          = {https://doi.org/10.1007/s12559-022-10067-7},
  doi          = {10.1007/s12559-022-10067-7},
  timestamp    = {Thu, 04 May 2023 20:29:30 +0200},
  biburl       = {https://dblp.org/rec/journals/cogcom/MalandriMMN23.bib},
  bibsource    = {dblp computer science bibliography, https://dblp.org}
}

@article{FFtree2022,
title = {FFTree: A flexible tree to handle multiple fairness criteria},
journal = {Information Processing & Management},
volume = {59},
number = {6},
pages = {103099},
year = {2022},
issn = {0306-4573},
doi = {https://doi.org/10.1016/j.ipm.2022.103099},
url = {https://www.sciencedirect.com/science/article/pii/S030645732200200X},
author = {Alessandro Castelnovo and Andrea Cosentini and Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica},
keywords = {Machine learning, Explainable AI, Fairness, Discrimination-aware decision tree}
}

@inproceedings{NAACL-22,
    title = {Contrastive Explanations of Text Classifiers as a Service},
    author = {Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Andrea Seveso},
    booktitle = {Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies: System Demonstrations},
    year = {2022},
    publisher = {Association for Computational Linguistics},
    url = {https://aclanthology.org/2022.naacl-demo.6},
    pages = {46--53}
}

@article{DBLP:journals/cii/GiabelliMMM22,
  author    = {Anna Giabelli and
               Lorenzo Malandri and
               Fabio Mercorio and
               Mario Mezzanzanica},
  title     = { {WETA:} Automatic taxonomy alignment via word embeddings},
  journal   = {Comput. Ind.},
  volume    = {138},
  pages     = {103626},
  year      = {2022},
  url       = {https://doi.org/10.1016/j.compind.2022.103626},
  doi       = {10.1016/j.compind.2022.103626},
  timestamp = {Mon, 04 Jul 2022 17:06:09 +0200},
  biburl    = {https://dblp.org/rec/journals/cii/GiabelliMMM22.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}


@article{CogComp,
author = {Anna Giabelli and Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Navid Nobani},
title = {Embeddings Evaluation using a Novel Measure of Semantic Similarity},
journal = {Cognitive Computation},
url = {https://link.springer.com/article/10.1007/s12559-021-09987-7},
year = {2022}
}

@article{GOZZI2022108053,
title = {XAI for myo-controlled prosthesis: Explaining EMG data for hand gesture classification},
journal = {Knowledge-Based Systems},
pages = {108053},
year = {2022},
issn = {0950-7051},
doi = {https://doi.org/10.1016/j.knosys.2021.108053},
url = {https://www.sciencedirect.com/science/article/pii/S0950705121011394},
author = {Noemi Gozzi and Lorenzo Malandri and Fabio Mercorio and Alessandra Pedrocchi},
keywords = {EMG signal decoding, eXplainable AI, Myo-controlled prosthesis}
}

@article{ContrXT2022,
title = {ContrXT: Generating contrastive explanations from any text classifier},
journal = {Information Fusion},
volume = {81},
pages = {103-115},
year = {2022},
issn = {1566-2535},
doi = {https://doi.org/10.1016/j.inffus.2021.11.016},
url = {https://www.sciencedirect.com/science/article/pii/S1566253521002426},
author = {Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Navid Nobani and Andrea Seveso},
keywords = {Post-hoc explainability, Contrastive explanation methods for XAI, XAI interpretability of text classifiers}
}

@InProceedings{10.1007/978-3-030-86523-8_37,
author="Malandri, Lorenzo
and Mercorio, Fabio
and Mezzanzanica, Mario
and Nobani, Navid",
editor="Oliver, Nuria
and P{\'e}rez-Cruz, Fernando
and Kramer, Stefan
and Read, Jesse
and Lozano, Jose A.",
title="TaxoRef: Embeddings Evaluation for AI-driven Taxonomy Refinement",
booktitle="Machine Learning and Knowledge Discovery in Databases. Research Track",
year="2021",
publisher="Springer International Publishing",
address="Cham",
pages="612--627",
abstract="Taxonomies provide a structured representation of semantic relations between lexical terms. In the case of standard official taxonomies, the refinement task consists of maintaining them updated over time, while preserving their original structure. To date, most of the approaches for automated taxonomy refinement rely on word vector models. However, none of them considers to what extent those models encode the taxonomic similarity between words. Motivated by this, we propose and implement TaxoRef, a methodology that (i) synthesises the semantic similarity between taxonomic elements through a new metric, namely HSS, (ii) evaluates to what extent the embeddings generated from a text corpus preserve those similarity relations and (iii) uses the best embedding resulted from this evaluation to perform taxonomy refinement. TaxoRef is a part of the research activity of a 4-year EU project that collects and classifies millions of Online Job Ads for the 27+1 EU countries. It has been tested over 2M ICT job ads classified over ESCO, the European standard occupation and skill taxonomy.",
isbn="978-3-030-86523-8"
}


@InProceedings{10.1007/978-3-030-93736-2_46,
author="Alessandro Castelnovo and Lorenzo Malandri and Fabio Mercorio Mario and Mezzanzanica, Mario and Andrea Cosentini",
title="Towards Fairness Through Time",
booktitle="Machine Learning and Principles and Practice of Knowledge Discovery in Databases",
year="2021",
publisher="Springer International Publishing",
address="Cham",
isbn="978-3-030-93736-2"
}

@InProceedings{AAAI-XAI,
author = {Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Andrea Seveso},
title="A Symbolic Approach to Generating Contrastive Explanations for Black Box Classifiers",
booktitle="The Explainable Agency in Artificial Intelligence Workshop (AAAI-XAI)",
year="2021"
}
@article{ASOC,
	author = {Anna Giabelli and Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Andrea Seveso},
	title = {Skills2Job: A Recommender System that Encodes Job Offer Embeddings on Graph Databases},
	year = {2021},
	publisher = {Springer},
	issn = {1568-4946},
	journal = {Applied Soft Computing},
    doi = {https://doi.org/10.1016/j.asoc.2020.107049},
    url = {https://doi.org/10.1016/j.asoc.2020.107049}
}

@inproceedings{DBLP:conf/ijcai/GiabelliMMMS21,
  author    = {Anna Giabelli and
               Lorenzo Malandri and
               Fabio Mercorio and
               Mario Mezzanzanica and
               Andrea Seveso},
  editor    = {Zhi{-}Hua Zhou},
  title     = {Skills2Graph: Processing million Job Ads to face the Job Skill Mismatch
               Problem},
  booktitle = {Proceedings of the Thirtieth International Joint Conference on Artificial
               Intelligence, {IJCAI} 2021, Virtual Event / Montreal, Canada, 19-27
               August 2021},
  pages     = {4984--4987},
  publisher = {ijcai.org},
  year      = {2021},
  url       = {https://doi.org/10.24963/ijcai.2021/708},
  doi       = {10.24963/ijcai.2021/708},
  timestamp = {Wed, 25 Aug 2021 17:11:16 +0200},
  biburl    = {https://dblp.org/rec/conf/ijcai/GiabelliMMMS21.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}

@inproceedings{DBLP:conf/aaai/GiabelliMMMS21,
  author    = {Anna Giabelli and
               Lorenzo Malandri and
               Fabio Mercorio and
               Mario Mezzanzanica and
               Andrea Seveso},
  title     = { {NEO}: {A} System for Identifying New Emerging Occupation from Job
               Ads},
  booktitle = {Thirty-Fifth {AAAI} Conference on Artificial Intelligence, {AAAI}
               2021, Thirty-Third Conference on Innovative Applications of Artificial
               Intelligence, {IAAI} 2021, The Eleventh Symposium on Educational Advances
               in Artificial Intelligence, {EAAI} 2021, Virtual Event, February 2-9,
               2021},
  pages     = {16035--16037},
  publisher = {AAAI Press},
  year      = {2021},
  url       = {https://ojs.aaai.org/index.php/AAAI/article/view/18004},
  timestamp = {Mon, 07 Jun 2021 11:46:04 +0200},
  biburl    = {https://dblp.org/rec/conf/aaai/GiabelliMMMS21.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}

@InProceedings{ISWC2020,
author="Anna Giabelli and  Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Andrea Seveso",
title="NEO: A Tool for Taxonomy Enrichment with New Emerging Occupations",
booktitle="The 19th International Conference of Semantic Web -- ISWC 2020",
year="2020",
publisher="Springer International Publishing",
pages="568--584",
doi = "https://doi.org/10.1007/978-3-030-62466-8_35",
url = "https://doi.org/10.1007/978-3-030-62466-8_35",
isbn="978-3-030-62466-8"
}



@inproceedings{DBLP:conf/cdmake/MercorioMS20,
  author    = {Fabio Mercorio and
               Mario Mezzanzanica and
               Andrea Seveso},
  editor    = {Andreas Holzinger and
               Peter Kieseberg and
               A Min Tjoa and
               Edgar R. Weippl},
  title     = {eXDiL: {A} Tool for Classifying and eXplaining Hospital Discharge
               Letters},
  booktitle = {Machine Learning and Knowledge Extraction - 4th {IFIP} {TC} 5, {TC}
               12, {WG} 8.4, {WG} 8.9, {WG} 12.9 International Cross-Domain Conference,
               {CD-MAKE} 2020, Dublin, Ireland, August 25-28, 2020, Proceedings},
  series    = {Lecture Notes in Computer Science},
  volume    = {12279},
  pages     = {159--172},
  publisher = {Springer},
  year      = {2020},
  url       = {https://doi.org/10.1007/978-3-030-57321-8\_9},
  doi       = {10.1007/978-3-030-57321-8\_9},
  timestamp = {Wed, 26 Aug 2020 11:05:42 +0200},
  biburl    = {https://dblp.org/rec/conf/cdmake/MercorioMS20.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}


@inproceedings{SENTIRE2020,
author={Lorenzo Malandri and Fabio Mercorio and  Mario Mezzanzanica and Navid Nobani},
title={MEET: A Method for Embeddings Evaluation for Taxonomic Data },
booktitle={SENTIRE-Sentiment Elicitation from Natural Text for Information Retrieval and Extraction, ICDM workshop (to appear)},
year={2020}
}

@article{MALANDRI2021103341,
title = "MEET-LM: A method for embeddings evaluation for taxonomic data in the labour market",
journal = "Computers in Industry",
volume = "124",
pages = "103341",
year = "2021",
issn = "0166-3615",
doi = "https://doi.org/10.1016/j.compind.2020.103341",
url = "http://www.sciencedirect.com/science/article/pii/S0166361520305753",
author = "Lorenzo Malandri and Fabio Mercorio and Mario Mezzanzanica and Navid Nobani",
keywords = "Embeddings evaluation, Taxonomies, Semantic hierarchies, Labour market, ICT"
}

@Article{Giabelli2020,
author={Anna Giabelli and Lorenzo Malandri and Fabio Mercorio and  Mario Mezzanzanica},
title={GraphLMI: A data driven system for exploring labor market information through graph databases},
journal={Multimedia Tools and Applications},
year={2020},
month={Jun},
day={29},
abstract={Labor Market Intelligence (LMI) is an emerging field of study that has been gaining interest as it allows employing Artificial Intelligence (AI) algorithms on labor market information. The goal of LMI is to support decision and policy making activities (e.g., real-time monitoring of Online Job Vacancies (OJV) across countries, forecast skill requested within vacancies, compare similar labor markets across borders, etc.). The European project in which this work is framed can be placed in this field, as it aims at collecting and classifying millions of OJVs from 28 EU Countries, handling 32 languages, and also extracting the requested skills. The result is a huge amount of information useful for understanding labor market dynamics and trends. The goal of this work is to realize a system - namely GraphLMI - that organizes such Labor Market information as a graph, enabling the representation of occupation/skill relevance and similarity over the European Labor Market; another goal is to enrich the European standard taxonomy of occupations and skills (ESCO) to better fit the labor market expectations. We formalize and design the GraphLMI data model, then we implement it as a graph-database, generated by processing 5.3+ million OJVs composed by free text and collected between 2018 and 2019 for France, Germany, and the United Kingdom. Finally, we show how the resulting knowledge can be queried through a declarative query language to understand, compare and evaluate country-based labor market dynamics for supporting policy and decision making activities at European level.},
issn={1573-7721},
doi={10.1007/s11042-020-09115-x},
url={https://doi.org/10.1007/s11042-020-09115-x}
}


@article{COLOMBO201927,
title = "AI meets labor market: Exploring the link between automation and skills",
journal = "Information Economics and Policy",
volume = "47",
pages = "27 - 37",
year = "2019",
note = "The Economics of Artificial Intelligence and Machine Learning",
issn = "0167-6245",
doi = "https://doi.org/10.1016/j.infoecopol.2019.05.003",
url = "http://www.sciencedirect.com/science/article/pii/S0167624518301318",
author = "Emilio Colombo and Fabio Mercorio and Mario Mezzanzanica",
keywords = "Machinelearning, Web vacancies, Skill analysis, Automation",
abstract = "This paper develops a set of innovative tools for labor market intelligence by applying machine learning techniques to web vacancies on the Italian labor market. Our approach allows to calculate, for each occupation, the different types of skills required by the market alongside a set of relevant variables such as region, sector, education and level of experience. We construct a taxonomy for skills and map it into the recently developed ESCO classification system. We subsequently develop measures of the relevance of soft and hard skills and we analyze their detailed composition. We apply the dataset constructed to the debate on computerization of work. We show that soft and digital skills are related to the probability of automation of a given occupation and we shed some light on the complementarity/substitutability of hard and soft skills."
}

@article{8903467,
author={Fabio Mercorio and Mario Mezzanzanica and Vincenzo and Moscato Giancarlo Sperlì and Antonio Picariello},
journal={IEEE Transactions on Emerging Topics in Computing},
title={DICO: A Graph-DB Framework for Community Detection on Big Scholarly Data},
year={2019},
volume={},
number={},
pages={1-1},
keywords={Semantics;Metadata;Detection algorithms;Social networking (online);Data mining;Data analysis;Big Scholarly Data;Knowledge graphs;Semantic network mining;Community Mining},
doi={10.1109/TETC.2019.2952765},
ISSN={2376-4562},
month={}
}

@inproceedings{DBLP:conf/pkdd/MercorioMMPS19,
  author    = {Fabio Mercorio and
               Mario Mezzanzanica and
               Vincenzo Moscato and
               Antonio Picariello and
               Giancarlo Sperli'},
  title     = {A Tool for Researchers: Querying Big Scholarly Data Through Graph
               Databases},
  booktitle = {Machine Learning and Knowledge Discovery in Databases - European Conference,
               {ECML} {PKDD} 2019},
  year      = {2019},
  crossref  = {DBLP:conf/pkdd/2019-3},
  url       = {https://doi.org/10.1007/978-3-030-46133-1\_46},
  doi       = {10.1007/978-3-030-46133-1\_46},
  timestamp = {Mon, 04 May 2020 14:19:13 +0200},
  biburl    = {https://dblp.org/rec/conf/pkdd/MercorioMMPS19.bib},
  bibsource = {dblp computer science bibliography, https://dblp.org}
}

@INPROCEEDINGS{SAC2019,
author = {Cesarini, Mirko and Mercorio, Fabio and Mezzanzanica, Mario and Moscato, Vincenzo and Picariello, Antonio},
title = {A Tool for Exploring Networks of Computer Scientists as a Graph},
booktitle = {ACM-SAC 2019 - The 34th ACM/SIGAPP Symposium On Applied Computing},
doi       = {10.1145/3297280.3297501},
isbn      = {978-1-4503-5933-7},
pages     = {2240--2242},
year = {2019}
}
@INPROCEEDINGS{HICSS19,    
 title={Towards Labour Market Intelligence through Topic Modelling},     
 author={Francesco Colace and Massimo De Santo and Marco Lombardi and Fabio Mercorio and Mario Mezzanzanica and Francesco Pascale},    
 booktitle={Proceedings of the 52nd Hawaii International Conference on System Sciences (HICSS)},     
 url = {http://hdl.handle.net/10125/59962},
 pdf = {https://scholarspace.manoa.hawaii.edu/bitstream/10125/59962/0522.pdf},
 pages = {5256--5265},
 isbn = {978-0-9981331-2-6}, 
 year = {2019}     
}

@Article{Boselli2018,
author="Boselli, Roberto and Cesarini, Mirko and Marrara, Stefania and Mercorio, Fabio and Mezzanzanica, Mario and Pasi, Gabriella and Viviani, Marco",
title="WoLMIS: a labor market intelligence system for classifying web job vacancies",
journal="Journal of Intelligent Information Systems",
year="2018",
month="Dec",
day="01",
volume="51",
number="3",
pages="477--502",
abstract="In the last decades, an increasing number of employers and job seekers have been relying on Web resources to get in touch and to find a job. If appropriately retrieved and analyzed, the huge number of job vacancies available today on on-line job portals can provide detailed and valuable information about the Web Labor Market dynamics and trends. In particular, this information can be useful to all actors, public and private, who play a role in the European Labor Market. This paper presents WoLMIS, a system aimed at collecting and automatically classifying multilingual Web job vacancies with respect to a standard taxonomy of occupations. The proposed system has been developed for the Cedefop European agency, which supports the development of European Vocational Education and Training (VET) policies and contributes to their implementation. In particular, WoLMIS allows analysts and Labor Market specialists to make sense of Labor Market dynamics and trends of several countries in Europe, by overcoming linguistic boundaries across national borders. A detailed experimental evaluation analysis is also provided for a set of about 2 million job vacancies, collected from a set of UK and Irish Web job sites from June to September 2015.",
issn="1573-7675",
doi="10.1007/s10844-017-0488-x",
url="https://doi.org/10.1007/s10844-017-0488-x"
}



@incollection{Mezzanzanica2018,
  url = { https://doi.org/10.1007/978-3-319-63962-8_276-1 },
  doi = { 10.1007/978-3-319-63962-8_276-1 },
  isbn = { 978-3-319-63962-8 },
  pages = { 1--11 },
editor    = {Sherif Sakr and Albert Y. Zomaya},
  publisher = { Springer International Publishing },
  year = {2019},
  booktitle = { Encyclopedia of Big Data Technologies },
  title = { Big Data Enables Labor Market Intelligence },
  author = { Mario Mezzanzanica and Fabio Mercorio },
}

@inproceedings{mercorio2018graphdblp_sebd,
  title={GraphDBLP Released: Querying the Computer
Scientists Network as a Graph},
  author={Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica and Vincenzo Moscato and Antonio Picariello},
  booktitle={SEBD 2018 the 26th Italian Symposium on Advanced Database Systems},
year="2018",
  url = {http://sisinflab.poliba.it/sebd/2018/papers/June-27-Wednesday/2-Graph-Database/SEBD_2018_paper_27.pdf}
}


@article{Mercorio2018,
title = "Classifying online Job Advertisements through Machine Learning",
journal = "Future Generation Computer Systems",
year = "2018",
issn = "0167-739X",
volume = "86",
pages = "319 - 328",
doi = "https://doi.org/10.1016/j.future.2018.03.035",
url = "http://www.sciencedirect.com/science/article/pii/S0167739X17321830",
author = "Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica",
keywords = "Machine learning, Text classification, Big data, NLP"
}

@ARTICLE{Lovaglio201878,
author={Lovaglio, P.G. and Cesarini, M. and Mercorio, F. and Mezzanzanica, M.},
title={Skills in demand for ICT and statistical occupations: Evidence from web-based job vacancies},
journal={Statistical Analysis and Data Mining},
year={2018},
volume={11},
number={2},
pages={78-91},
doi={10.1002/sam.11372},
note={cited By 0},
url={https://www.scopus.com/inward/record.uri?eid=2-s2.0-85044417335&doi=10.1002%2fsam.11372&partnerID=40&md5=1252eca21bc5fda7a6183e759a7ca6be},
author_keywords={labour market data;  machine learning;  text mining;  Web data},
publisher={John Wiley and Sons Inc.},
issn={19321864},
document_type={Article},
source={Scopus},
}


@article{mezzanzanica2018graphdblp,
  title={GraphDBLP: a system for analysing networks of computer scientists through graph databases},
  author={Mario Mezzanzanica and Fabio Mercorio and Mirko Cesarini and Vincenzo Moscato and Antonio Picariello},
  journal={Multimedia Tools and Applications},
year="2018",
month="Jul",
day="01",
volume="77",
number="14",
pages="18657--18688",
issn="1573-7721",
  doi = {10.1007/s11042-017-5503-2},
  url = {https://doi.org/10.1007/s11042-017-5503-2},
  publisher={Springer}
}

@article{AMATO2018,
title = "Multimedia story creation on social networks",
journal = "Future Generation Computer Systems",
year = "2018",
issn = "0167-739X",
volume = "86",
pages = "412 - 420",
doi = "https://doi.org/10.1016/j.future.2018.04.006",
url = "http://www.sciencedirect.com/science/article/pii/S0167739X17322483",
author = "Flora Amato and Aniello Castiglione and Fabio Mercorio and Mario Mezzanzanica and Vincenzo Moscato and Antonio Picariello and Giancarlo Sperlì",
keywords = "Visual analytics, Multimedia summarization, Online social networks, Influence analysis"
}

@article{sperli2018social,
  title={A Social Media Recommender System},
  author={Sperlì, Giancarlo and Amato, Flora and Mercorio, Fabio and Mezzanzanica, Mario and Moscato, Vincenzo and Picariello, Antonio},
  journal={International Journal of Multimedia Data Engineering and Management (IJMDEM)},
  volume={9},
  number={1},
  pages={36--50},
  year={2018},
  publisher={IGI Global}
}



@inproceedings{DBLP:conf/pkdd/BoselliCMM17,
  author    = {Roberto Boselli and
               Mirko Cesarini and
               Fabio Mercorio and
               Mario Mezzanzanica},
  title     = {Using Machine Learning for Labour Market Intelligence},
  booktitle = {Machine Learning and Knowledge Discovery in Databases - European Conference,
               {ECML} {PKDD} 2017, Skopje, Macedonia, September 18-22, 2017, Proceedings,
               Part {III}},
  pages     = {330--342},
  year      = {2017},
  crossref  = {DBLP:conf/pkdd/2017-3},
  url       = {https://doi.org/10.1007/978-3-319-71273-4_27},
  doi       = {10.1007/978-3-319-71273-4_27},
  timestamp = {Tue, 02 Jan 2018 12:33:44 +0100},
  biburl    = {http://dblp.org/rec/bib/conf/pkdd/BoselliCMM17},
series    = {Lecture Notes in Computer Science},
  volume    = {10536},
  publisher = {Springer},
  year      = {2017},
  isbn      = {978-3-319-71272-7},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}

@inproceedings{DBLP:conf/pkdd/BoselliCMM17a,
  author    = {Roberto Boselli and
               Mirko Cesarini and
               Fabio Mercorio and
               Mario Mezzanzanica},
  title     = {An {AI} Planning System for Data Cleaning},
  booktitle = {Machine Learning and Knowledge Discovery in Databases - European Conference,
               {ECML} {PKDD} 2017, Skopje, Macedonia, September 18-22, 2017, Proceedings,
               Part {III}},
  pages     = {349--353},
  year      = {2017},
  crossref  = {DBLP:conf/pkdd/2017-3},
  url       = {https://doi.org/10.1007/978-3-319-71273-4_29},
  doi       = {10.1007/978-3-319-71273-4_29},
  timestamp = {Tue, 02 Jan 2018 12:33:44 +0100},
  biburl    = {http://dblp.org/rec/bib/conf/pkdd/BoselliCMM17a},
  isbn      = {978-3-319-71272-7},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}

@INPROCEEDINGS{SymInfOpt2016,
  title={PDDL+ Planning with Temporal Pattern Databases},
  author={Wiktor Piotrowski and Maria Fox and Derek Long and Daniele Magazzeni and Fabio Mercorio},
  booktitle={The AAAI-17 Workshop on Symbolic Inference and Optimization  (SymInfOpt-17)},
  year={2017},
url = {https://sites.google.com/site/syminfopt17/}

}


@INPROCEEDINGS{WI2017,
  title={A Language Modelling Approach for Discovering Novel Labour Market Occupations from the Web},
  author={Stefania Marrara and
               Gabriella Pasi and
               Marco Viviani and
               Mirko Cesarini and
               Fabio Mercorio and
               Mario Mezzanzanica and
               Marco Pappagallo},
  booktitle={2017 IEEE/WIC/ACM International Conference on Web Intelligence (WI 2017)},
 pages     = {1026--1034},
  year      = {2017},
  crossref  = {DBLP:conf/webi/2017},
  url       = {http://doi.acm.org/10.1145/3106426.3109035},
  doi       = {10.1145/3106426.3109035},
  timestamp = {Wed, 16 Aug 2017 09:49:33 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/conf/webi/MarraraPVCMMP17},
isbn      = {978-1-4503-4951-2},  
year={2017}
}



@INPROCEEDINGS{DATA2017,
  author = {Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica and Alessandro Vaccarino},
  title = {A Pipeline for Multimedia Twitter Analysis through Graph Databases: Preliminary Results},
  booktitle = {DATA 2017 -  the International Conference on Data Technologies and Applications },
doi={10.5220/0006490703430349},
  year = {2017}
  }


@INPROCEEDINGS{ijcai2016,
  title={Heuristic Planning for {PDDL}+ Domains},
  author={Wiktor Piotrowski and Maria Fox and Derek Long and Daniele Magazzeni and Fabio Mercorio},
  booktitle={Proceedings of the 25th International Joint Conference on Artificial Intelligence (IJCAI-16)},
  year={2016},
  pages = {3213--3219},
isbn      = {978-1-57735-770-4},
url       = {http://www.ijcai.org/Proceedings/16/Papers/455.pdf},
publisher = {IJCAI/AAAI Press}
}



@INPROCEEDINGS{plansig2016,
  title={ {PDDL}+ Planning with Temporal Pattern Databases},
  author={Wiktor Piotrowski and Maria Fox and Derek Long and Daniele Magazzeni and Fabio Mercorio},
  booktitle={The 34th Workshop of the UK PLANNING AND SCHEDULING Special Interest Group  (PlanSIG-16)},
  year={2016},
url = {https://www.crisp-org.it/mercorio/papers/plansig2016.pdf}

}


@article{IJAIT2015,
   author = {Giuseppe {Della Penna} and Benedetto Intrigila and Daniele Magazzeni and Fabio Mercorio},
   title = {Synthesis of Cost-Optimal Strong Plans in Non-Deterministic Domains},
   journal = {Journal on Artificial Intelligence Tools},
   volume = {24},
   number = {6},
   doi = {10.1142/S0218213015500256},
   keywords = {planning, PDDL, model-checking},
   year = {2015}
}

@article{mezzanzanica2014model,
  title={A model-based evaluation of Data quality activities in {KDD}},
  author={Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
  journal={Information Processing \& Management},
  year={2015},
  volume = {51},
  number= {2},
  pages = {144-166},
  doi={10.1016/j.ipm.2014.07.007},
  keywords = {Data quality, data cleansing, KDD, Labour Market Intelligence},
  publisher={Elsevier}
}


@INPROCEEDINGS{SEBD2015,
author = {Amato, Flora and Boselli, Roberto and Cesarini, Mirko and Mercorio, Fabio and Mezzanzanica, Mario and Moscato, Vincenzo and Persia, Fabio and Picariello, Antonio},
title = {Classification of Web Job Advertisements: A Case Study},
booktitle = {SEBD 2015 - The 23rd Italian Symposium on Advanced Database Systems},
year = {2015},
pages = {144-151},
keywords = {KDD, Labour Market Intelligence, Machine Learning, Text Classification},
url= {https://www.crisp-org.it/mercorio/papers/SEBD2015.pdf}
}

@article{DBLP:journals/ijiq/BoselliCMM14,
  author    = {Roberto Boselli and
               Mirko Cesarini and
               Fabio Mercorio and
               Mario Mezzanzanica},
  title     = {Longitudinal data consistency verification using formal methods},
  journal   = {IJIQ},
  volume    = {3},
  number    = {3},
  pages     = {185--206},
  year      = {2014},
  doi       = {10.1504/IJIQ.2014.064054},
  timestamp = {Fri, 15 Aug 2014 13:35:06 +0200},
  biburl    = {http://dblp.uni-trier.de/rec/bib/journals/ijiq/BoselliCMM14},
  keywords = {planning, Labour Market Intelligence, model-checking, data cleansing, Data quality},
  bibsource = {dblp computer science bibliography, http://dblp.org}
}

@incollection{data2014_special,
year={2015},
isbn={978-3-319-25935-2},
booktitle={Data Management Technologies and Applications},
volume={178},
series={Communications in Computer and Information Science},
editor={Helfert, Markus and Holzinger, Andreas and Belo, Orlando and Francalanci, Chiara},
doi={10.1007/978-3-319-25936-9_5},
title={Accurate Data Cleansing through Model Checking and Machine Learning Techniques},
url={http://dx.doi.org/10.1007/978-3-319-25936-9_5},
publisher={Springer International Publishing},
keywords={data cleansing, Machine Learning, Labour Market Intelligence},
author={Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
pages={62-80},
language={English}
}


@article{Mezzanzanica:2015:MAD:2742302.2641575,
 author = {Mario Mezzanzanica and Mirko Cesarini and Fabio Mercorio and Roberto Boselli},
 title = {A Model-Based Approach for Developing Data Cleansing Solutions},
 journal = {The {ACM} Journal of Data and Information Quality},
 issue_date = {February 2015},
 volume = {5},
 number = {4},
 month = mar,
 year = {2015},
 issn = {1936-1955},
 pages = {1--28},
 articleno = {13},
 numpages = {28},
 url = {http://doi.acm.org/10.1145/2641575},
 doi = {10.1145/2641575},
 acmid = {2641575},
 publisher = {ACM},
 address = {New York, NY, USA},
 keywords = {Data quality, planning, model-checking, data cleansing}
}

@INPROCEEDINGS{7050852, 
author={Amato, Flora and Boselli, Roberto and Cesarini, Mirko and Mercorio, Fabio and Mezzanzanica, Mario and Moscato, Vincenzo and Persia, Fabio and Picariello, Antonio}, 
booktitle={Semantic Computing (ICSC), 2015 IEEE International Conference on}, 
title={Challenge: Processing web texts for classifying job offers}, 
year={2015}, 
month={Feb}, 
pages={460-463}, 
keywords = {KDD, Labour Market Intelligence, Machine Learning, Text Classification},
doi={10.1109/ICOSC.2015.7050852}
}

@INPROCEEDINGS{mochap2015,
  author = { {Della Penna},Giuseppe and Benedetto Intrigila and Daniele Magazzeni and Fabio Mercorio},
  title = { {UPM}urphi Released: {PDDL}+ Planning for Hybrid Systems},
  booktitle = {Proceedings of the 2nd Workshop on Model Checking and Automated Planning (MOCHAP-2015)},
  year = {2015},
  pages = {35--39},
  keywords = {planning, PDDL, model-checking},
  url= {http://www.cs.bgu.ac.il/~icaps15/workshops/mochap-proceedings.pdf}
}

@INPROCEEDINGS{komis2015,
  author = {Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica },
  title = {Applying the AHP to Smart Mobility Services: A Case Study},
  booktitle = { {DATA} 2015 - Proceedings of 4th International Conference on Data
               Management Technologies and Applications, Colmar, Alsace, France,
               20-22 July, 2015.},
  pages     = {354--361},
  year      = {2015},
  doi       = {10.5220/0005580003540361},
  keywords = {AHP, multi-criteria-decision-making, smart-city},
  url= {https://www.crisp-org.it/mercorio/papers/KOMIS2015.pdf}
}


@INPROCEEDINGS{SEBD2014,
  author = {Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica },
  title = {Data quality on KDD: a Real-life Scenario},
  booktitle = {SEBD 2014 -  The 22nd Italian Symposium on Advanced Database Systems},
  year = {2014},
  pages = {378-385},
  url= {https://www.crisp-org.it/mercorio/papers/SEBD2014.pdf},
   keywords = {Data quality, KDD, data cleansing}

    }


@INPROCEEDINGS{DATA2014,
  author = {Mario Mezzanzanica and Roberto Boselli and Mirko Cesarini and Fabio Mercorio},
  title = {Improving Data Cleansing Accuracy: A model-based Approach},
  booktitle = {DATA 2014 -  the International Conference on Data Technologies and Applications 
  (best paper awarded)},
  year = {2014},
  url= {https://www.crisp-org.it/mercorio/papers/DATA2014.pdf},
  keywords = {KDD, data cleansing},
  publisher = {SciTePress}
  }


@INPROCEEDINGS{ICAPS2014,
  author = {Roberto Boselli  and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
  title = {Planning meets Data Cleansing},
  booktitle = {The 24th International Conference on Automated Planning and Scheduling (ICAPS)},
  url= {http://www.aaai.org/ocs/index.php/ICAPS/ICAPS14/paper/view/7898},
  pages = {439--443},
  keywords = {Data quality, planning, KDD, data cleansing, Labour Market Intelligence},
  year = {2014}
}
@ARTICLE{AI2014,
  author = {Roberto Boselli  and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
  title = {Towards data cleansing via planning},
  journal = {Intelligenza Artificiale},
  volume = {8},
  number = {1},
  year = {2014},
  pages = {57-69},
  doi = {10.3233/IA-140061},
  keywords = {Data quality, planning, KDD, data cleansing, Labour Market Intelligence},
  publisher = {IOS Press}
}


@INPROCEEDINGS{IPS2013A,
  author = {Roberto Boselli  and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
  title = {Can Planning meet Data Cleansing?},
  booktitle = {5th Italian Workshop on Planning and Scheduling at AIxIA 2013},
  pages = {63-66},
  url= {https://www.crisp-org.it/fabiomercorio/papers/IPS_crisp.pdf},
  keywords = {Data quality, planning, KDD, data cleansing, Labour Market Intelligence},
  year = {2013}
}

@incollection{SOTA2014,
  author = {Roberto Boselli  and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
  title = {A Policy-Based Cleansing and Integration Framework for Labour and Healthcare Data},
  booktitle = {Knowledge Discovery and Data Mining, LNCS 8401},
  pages = {141-168},
  doi = {10.1007/978-3-662-43968-5_8},
 publisher = {Springer},
 keywords = {Data quality, KDD, healthcare, Labour Market Intelligence},
  year = {2014}
}

@INPROCEEDINGS{IPS2013B,
  author = {Daniele Magazzeni and Fabio Mercorio and Balbir Barn and Tony Clark and Franco Raimondi
 and Vinay Kulkarni},
  title = {Business Model Design as a Temporal Planning Problem: Preliminary Results},
  booktitle = {5th Italian Workshop on Planning and Scheduling at AIxIA 2013},
  pages = {85-92},
  url= {https://www.crisp-org.it/fabiomercorio/papers/IPS_uk.pdf},
  keywords = {PDDL, planning, scheduling, BPM},
  year = {2013}
}



@ARTICLE{AICom2012,
  author = {Fabio Mercorio},
  title = {Model Checking for Universal Planning in Deterministic and Non-Deterministic Domains},
  journal = {AI Communications},
  volume = {26},
  number = {2},
  year = {2013},
  pages = {257-259},
  doi = {10.3233/AIC-130556},
  keywords = {PDDL, planning, model-checking},
  publisher = {IOS Press}
}


@inproceedings{ICIQ2012,
  author    = {Mario Mezzanzanica and
               Roberto Boselli and
               Mirko Cesarini and
               Fabio Mercorio},
  title     = {Towards the use of Model Checking for performing Data Consistency Evaluation and Cleansing},
  year      = {2012},
  keywords = {Data quality},
  booktitle     = {The 17th International Conference on Information Quality (ICIQ 2012) (to appear)}
}


@INPROCEEDINGS{DATA2012,
  author = {Mario Mezzanzanica and Roberto Boselli and Mirko Cesarini and Fabio Mercorio},
  title = {Data quality Sensitivity Analysis on Aggregate Indicators },
  booktitle = {DATA 2012 -  the International Conference on Data Technologies and Applications},
  year = {2012},
  editor = {Markus Helfert and Chiara Francalanci and Joaquim Filipe},
  pages = {97-108},
  publisher = {SciTePress},
  bibsource = {DBLP, http://dblp.uni-trier.de},
  doi = {10.5220/0004040300970108},
  url= {https://www.crisp-org.it/mercorio/papers/DATA2012.pdf},
  keywords = {Data quality, data analysis},
  isbn = {978-989-8565-18-1}
}


@inproceedings{IDA2011,
  author    = {Mario Mezzanzanica and
               Roberto Boselli and
               Mirko Cesarini and
               Fabio Mercorio},
  title     = {Data quality through Model Checking Techniques},
  booktitle = {Intelligent Data Analysis (IDA), Lecture Notes in Computer Science vol. 7014},
  year      = {2011},
  pages     = {270-281},
  isbn      = {978-3-642-24799-6},
   publisher = {Springer},
 editor    = {Jo{\~a}o Gama and
               Elizabeth Bradley and
               Jaakko Hollm{\'e}n},
         doi        = {10.1007/978-3-642-24800-9_26},
         keywords = {Data quality, data analysis, model-checking, planning},
  bibsource = {DBLP, http://dblp.uni-trier.de}
}


@article {AppInt2011,
   author = {Giuseppe {Della Penna} and Daniele Magazzeni and Fabio Mercorio},
   affiliation = {Department of Computer Science, University of L'Aquila, L'Aquila, Italy},
   title = {A universal planning system for hybrid domains},
   journal = {Applied Intelligence},
   publisher = {Springer Netherlands},
   issn = {0924-669X},
   pages = {932-959},
   volume = {36},
   number = {4},
   doi = {10.1007/s10489-011-0306-z},
   keywords = {PDDL, model-checking, planning},
   year = {2012}
}

@inproceedings{AIxIA2010,
  author = {Fabio Mercorio},
  title = {Planning for Continuous Domains},
  booktitle = {The {AI*IA} Doctoral Consortium, Brescia (Italy) December 1-3},
  year = {2010},
  url= {http://aixia10.ing.unibs.it/index.php?option=com_content&view=article&id=16&Itemid=17},
  keywords = {PDDL, model-checking, planning}
}

@ARTICLE{IJAIA2010,
  author = {Giuseppe {Della Penna} and Benedetto Intrigila and Daniele Magazzeni and Fabio Mercorio},
  title = {Resource-Optimal Planning For An Autonomous Planetary Vehicle},
  journal = {International Journal of Artificial Intelligence \& Applications (IJAIA)},
  year = {2010},
  volume = {1},
  pages = {15--29},
  number = {3},
  keywords = {PDDL, model-checking, planning},
  url= {http://airccse.org/journal/ijaia/papers/0710ijaia2.pdf},
}

@inproceedings{ICAPS2010,
  author={Giuseppe {Della Penna}, and Benedetto Intrigila and Daniele Magazzeni and Fabio Mercorio},
  title = {A {PDDL+} Benchmark Problem: The Batch Chemical Plant},
  booktitle = {Proceedings of the The 20th International Conference on Automated Planning and Scheduling (ICAPS 2010)},
  year = {2010},
  address = {Toronto, Canada},
  pages = {222-225},
  publisher = {AAAI Press},
  keywords = {PDDL, model-checking, planning, real-life application},
  url= {http://www.aaai.org/ocs/index.php/ICAPS/ICAPS10/paper/view/1418/1564}
}

@inproceedings{ICAS2010,
  author = {Giuseppe {Della Penna}  and Benedetto Intrigila and Daniele Magazzeni and Fabio Mercorio},
  title = {Planning for Autonomous Planetary Vehicles},
  booktitle = {Proceedings of the The Sixth International Conference on Autonomic and Autonomous Systems},
  year = {2010},
   publisher = {IEEE},
  address = {Cancun, Mexico},
  pages = {131--136},
    keywords = {PDDL, model-checking, planning, application domain},
  doi = {10.1109/ICAS.2010.26}
}

@inproceedings{ICAPS09,
  author = {Giuseppe {Della Penna} and Benedetto Intrigila and Daniele Magazzeni and Fabio Mercorio},
  title = { {UPMurphi}: a Tool for Universal Planning on {PDDL+} Problems},
  booktitle = {Proceedings of the 19th International Conference on Automated Planning and Scheduling (ICAPS 2009)},
  publisher = {AAAI Press},
  address = {Thessaloniki, Greece},
  month = {September},
  year = {2009},
  pages = {106--113},
    keywords = {PDDL, model-checking, planning, application domain},
  url= {http://aaai.org/ocs/index.php/ICAPS/ICAPS09/paper/view/707}
}

@inproceedings{ICINCO2011,
  author = {Giuseppe {Della Penna}  and Benedetto Intrigila 
  and Daniele Magazzeni and Fabio Mercorio and Enrico Tronci},
  title = {Cost-Optimal Strong Planning in Non-Deterministic Domains},
  booktitle = {Proceedings of the 8th International Conference on Informatics in Control, Automation and Robotics (ICINCO)},
  pages     = {56-66},
 publisher = {SciTePress},
 isbn = {978-989-8425-74-4},
 url= {https://www.crisp-org.it/mercorio/papers/ICINCO2011.pdf},
 keywords = {PDDL, model-checking, planning, application domain},
  year = {2011}
}

@INPROCEEDINGS{DATA2013,
  author = {Mario Mezzanzanica and Roberto Boselli and Mirko Cesarini and Fabio Mercorio},
  title = {Automatic Synthesis of Data Cleansing Activities},
  booktitle = {DATA 2013 - the International Conference on Data Technologies and Applications},
  year = {2013},
   pages     = {138-149},
    editor    = {Markus Helfert and
               Chiara Francalanci and
               Joaquim Filipe},
  isbn      = {978-989-8565-67-9},
  url= {https://www.crisp-org.it/mercorio/papers/DATA2013.pdf},
  keywords = {Data quality, data cleansing, KDD, application domain},
  publisher = {SciTePress}
}


@INPROCEEDINGS{HCI-KDD2013,
  author = {Roberto Boselli and Mirko Cesarini and Fabio Mercorio and Mario Mezzanzanica},
  title = {Inconsistency Knowledge Discovery for Longitudinal Data Management: A Model-Based Approach},
  booktitle = {SouthCHI13 special session on Human-Computer Interaction \& Knowledge Discovery, Lecture Notes in Computer Science, vol. 7947 \textbf{(Best paper award)}},
  publisher = {Springer},
  doi = {10.1007/978-3-642-39146-0_17},
  keywords = {Data quality, data cleansing, KDD, application domain},
  year = {2013}
}

@incollection{antology2016,
  author = { Silvia Dusi and  Matteo Fontana and Fabio Mercorio and  Mario Mezzanzanica},
  title = {Analysing the Relevance of ICT Skills on occupations in Web Job Vacancies},
  year = {2016},
  publisher = {Rainer Hampp Verlag},
  booktitle = {Digital (R)Evolution and Its Effects on Labour: Opportunities and Challenges for Re-gional and Local Labour Market Monitoring},
  keywords = {Big Data, Labour Market Intelligence, Web Job Vacancy},
  pages = {31--44}
}
</pre>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js">
</script>
<script type="text/javascript" src="https://fabiomercorio.github.io/bib-list.js">
</script>
<script type="text/javascript" src="https://fabiomercorio.github.io/run.js">
</script>

The source bibtex list is rendered using <a href="https://github.com/vkaravir/bib-publication-list" rel="noopener noreferrer" target="_blank">vkaravir's bib-publication-list.</a>

   <!-- Histats.com  START  (aync)-->
<script type="text/javascript">var _Hasync= _Hasync|| [];
_Hasync.push(['Histats.start', '1,746089,4,0,0,0,00000000']);
_Hasync.push(['Histats.fasi', '1']);
_Hasync.push(['Histats.track_hits', '']);
(function() {
var hs = document.createElement('script'); hs.type = 'text/javascript'; hs.async = true;
hs.src = ('//s10.histats.com/js15_as.js');
(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(hs);
})();</script>
<noscript><a href="/" target="_blank"><img  src="//sstatic1.histats.com/0.gif?746089&101" alt="contatore accessi" border="0"></a></noscript>
<!-- Histats.com  END  -->
