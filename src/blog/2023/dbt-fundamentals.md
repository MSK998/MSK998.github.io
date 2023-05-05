---
title: DBT Fundamentals
date: 2023/05/02
description: DBT Core/Cloud is easy, once you understand its place in your tech-stack - I'll be showing you some basics and how to do some routine data transformations
lang: en
headerImage: /images/dbt-labs-signature_tm_light.svg
---

This post is inspired from and summarising the [DBT Fundamentals Course](https://courses.getdbt.com/courses/fundamentals) along with some of my own takes on how DBT will fit into our tech stack, I will be focussing on the DBT Core version which is a FOSS offering of the paid version DBT cloud (which comes with some bells and whistles like scheduling online editors etc)

# What is DBT?

In short DBT is a data transformation engine. The T in ETL/ELT see [ETL VS ELT](https://www.integrate.io/blog/etl-vs-elt/). DBT is preferred by many software and data engineers alike due it being friendly to use, mixing python and SQL which provides a way to create modular and readable models and transformations. There are so many other things that DBT lets us do - like macros, templating, documentation and visualisation to name a few.

# What DBT is Not

DBT is not a data loader. While there is capability to load CSVs into a database via DBT, its primary function remains to transform data from one or more raw formats to some normalised, down-stream usable format for consumption. 

It's not an extractor. Again, while capability remains within DBT to extract data from files, its primary function is as stated before - transformations

While there is definitely room for dbt to be all 3 steps of an ELT pipeline there are probably better, faster tools on the market to fill these gaps.

# Modelling

Models are exactly what you would expect. Its the definition of your data at every step of the transformation pipeline. There are several types or categories of models that we can define. Functionally there are no differences between how we define these models, but from a readability and documentation standpoint it will help others unpick the work you have been doing.

## Source Models

Source models are the models that define the raw data that we will be transforming into nice usable data for our applications. These models can come from several different databases or schemas. 

Sources allow us to centralize the source of our data. Meaning that if there were a change in the location or name of the source we can very quickly change it from a yml file and it will propagate though all models that use the source.

Although in the documentation, there is a database property in the source list, its not required if you are pulling data from the same database.

If you don't specify schema, then DBT will use the name as a standin

## Staging Models

Staging models are a place to clean and standardise the source data. These are usually light touch operations, like setting columns to null in certain instances of data or only capturing real data instead of bad data etc. We also want to prefix these models with `stg_` to let others know what these tables are supposed to be.

## Intermediate Models

These models will contain the bulk of our transformations. It can be 1 or more models that show each stage of transformation. Source tables should never be referenced here as a matter of convention. 

## Fact Models

Fact models are what the DBT team call a final model. The end result of our transformations to put it another way. Fact models will represent an event or an occurence of something. These models will be prefixed with `fct_`. Some examples of a fact model include:

1. An order
2. A click
3. A vote

## Dimension Models

Dimension models are also final models. Dimensions represent things that exist. In other words, its a piece of data that only one unique instance of it can exist these are prefixed with `dim_`. Heres some dimension model examples: 

1. A person
2. A company
3. A location

# Source Freshness

Source freshness allows us to alert that the data in the table hasn't been updated in a long while. It can be a good early warning signal that a load process has not completed or there has been som kind of error up-stream of the transformation. 

Inside our yml file containing our sources definition we can add the following snippet in the tables section: 
```yml
version: 2
sources:
  ...
  tables:
    - name: orders
    ...
      loaded_at_field: _etl_loaded_at  
      freshness:  
        warn_after: {count: 12, period: hour}  
        error_after: {count: 24, period: hour}
```

This code will warn if the data is older than 12 hours and will error out if the newest data is older than 24. 

We can run this check by executing `dbt source freshness`

# Testing

DBT has the ability to write tests for the data within your tables. 

## Singular Tests

Singluar tests are pinpoint tests that are used to test extremely specific pieces of your data. Applied to maybe only a few models that relate to the data you need to test. These kinds of tests aren't supposed to be widely used across all models

## Generic Tests

Generic tests are highly scalable tests that can be asserted across most / all models. Generic tests are written within a few lines of the yml code that can check for basic things. There are 4 different generic tests that come baked into DBT:

1. unique
2. not_null
3. accepted_values
4. relationships

Its possible to write your own genric tests as well as import ones.

## Testing Sources

We can also test sources in the same way here is an example of how the yml looks when adding generic tests to the raw data:

```yml
...
- name: orders 
  columns: 
    - name: id 
      tests: 
      - unique 
      - not_null
...
```

# Documentation

Documentation in DBT is really easy, not only are dependencies automatically linked up, it is enriched by descriptions we can add to our yml code. We can extend the docs in two ways.

## Simple Description

A simple description allows us to write a few sentences about a table or a field. this can be achieved by adding `description: 'foo bar baz'` into our appropriate yml block.

## Doc Blocks

Doc blocks extend the functionality of the description property even further allowing us to write full blocks of Markdown into our documentation. Blocks can be defined like so: 

```md
{% docs order_status %}

# Big Title
here is some fancy markdown that helps us make rich documentation that can then be served to users.

{% enddocs %}
```

We can then reference our doc block like: 

```
description: '{{ doc("order_status") }}'
``` 

The naming of the MD file doesn't really matter, as long as we reference the block correctly. Convention dictates that we keep the MD file in the same directory as the model/columns we are describing. 

## Documenting Sources

We can also document sources. Following the same syntax as above we can document tables and columns within the sources block of a yml file. 

## Generating Documentation

So we have defined all of our tables and columns with adequate information. How do we make the documentation more readable for our audiences? 

First we will run `dbt docs generate` this will output the necessary files needed to then `dbt docs serve` the docs via a webserver.

# Deployment and Production

There should be a dedicated production branch which is usually master/main. Aswell as a production schema, usually just called PROD or production. DBT cloud allows us to run these jobs on a scheduled cycle.

It's important to realise that DBT Cloud lets us schedule ANY command we want based on the DBT Core CLI.

# Conclusion

So there we have it. All content described above is talked about in detail in the [DBT Fundamentals Course](https://courses.getdbt.com/courses/fundamentals). There is also a good repository on [GitHub](https://github.com/dbt-labs/jaffle_shop) that can go through some of the basics of DBT in a practical way.