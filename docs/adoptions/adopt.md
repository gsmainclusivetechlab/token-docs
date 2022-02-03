---
id: adopt
title: Adopt
sidebar_label: Get Started
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This section helps you getting started through the ejection process of the modules included on this project so that you can adopt them on your stack.

### Demonstration Only Modules
As stated before the project is organised in different services.
Some of those services were built for demonstration purposes only, like so, the Proxy Service and Web Client  are disposable as their purpose is to serve the live and on premises demonstrations.

### Adoption Modules
The Engine (:4400), The Token Algorithm Solution (:3700) and the Database (:3306) are three of the key modules which should be considered when crafting an adoption plan.
All of these modules can be started on a standalone manner but expect the others to be available with some adaptations.
The Token Algorithm Solution is the only service which doesn’t have any dependency, like so, it can run alone with any adaptations or changes to the codebase (rather than a SQL database connection).
Please see the diagram below as a visual aid to this reasoning.
<img alt="Adoption Highlights" src={useBaseUrl('img/architecture-adoption-highlight.png')} />

### Where to start?
We recommend first reading the Instructions and Trying the Live Demo; Following that you should read the instructions to run the demo locally and browse through the code.
From this point, and by analysing the architecture section of this documentation you should be able to clearly understand how the 6 services interact with each other and inherently their dependencies.