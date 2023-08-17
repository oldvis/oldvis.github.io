# What is the OldVis project?

The OldVis project is a digital library dedicated to [old visualizations](https://en.wikipedia.org/wiki/Data_and_information_visualization#History).
The digital library is built by assembling information related to old visualizations scattered in existing digital libraries such as [David Rumsey Map Collection](https://www.davidrumsey.com/) and [Internet Archive](https://archive.org/).
It has indexed over 13K old visualizations published before 1950.

## Components

The OldVis project consists of several components:

| Repository                                                                             | Description                                                                                               |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| [gallery](https://github.com/oldvis/gallery)                                           | An online gallery of old visualizations ([details](../implementation/gallery)).                           |
| [oldvis_dataset](https://github.com/oldvis/oldvis_dataset)                             | A Python package to download old visualizations ([details](../implementation/downloader)).                |
| [dataset](https://github.com/oldvis/dataset)                                           | Data curation scripts in Python and the built dataset ([details](../implementation/dataset)).             |
| [libquery](https://github.com/oldvis/libquery)                                         | A Python package to query digital libraries ([details](../implementation/querier)).                       |
| [libquery_extensions](https://github.com/oldvis/libquery_extensions)                   | A Python package that extends libquery ([details](../implementation/querier)).                            |
| [libprocess](https://github.com/oldvis/libprocess)                                     | A Python package to process query result of libquery ([details](../implementation/processor)).            |
| [libprocess_extensions](https://github.com/oldvis/libprocess_extensions)               | A Python package to process query result of libquery_extensions ([details](../implementation/processor)). |
| [image classification labeler](https://github.com/oldvis/image-classification-labeler) | An interactive data labeling system to label image classification.                                        |
| [image segmentation labeler](https://github.com/oldvis/image-segmentation-labeler)     | An interactive data labeling system to label image segmentation.                                          |
| [docs](https://github.com/oldvis/oldvis.github.io)                                     | This documentation website.                                                                               |

This documentation provides an overview of the project implementation.
Detailed documentation can be found in each repository.

## Stack

The stack of the OldVis project consists of four layers (from bottom to top):

- Data Collection: fetch metadata and images with [libquery](https://github.com/oldvis/libquery)/[libquery_extensions](https://github.com/oldvis/libquery_extensions) and process metadata with [libprocess](https://github.com/oldvis/libprocess)/[libprocess_extensions](https://github.com/oldvis/libprocess_extensions).
- Data Labeling: label images with [image classification labeler](https://github.com/oldvis/image-classification-labeler) and [image segmentation labeler](https://github.com/oldvis/image-segmentation-labeler) systems.
- Dataset: the data curation scripts and built [dataset](https://github.com/oldvis/dataset) and the dataset downloader [oldvis_dataset](https://github.com/oldvis/oldvis_dataset).
- Gallery: the metadata and image [gallery](https://github.com/oldvis/gallery).

<img src="/stack.svg" style="width: 80%">

## Copyright

::: warning Notice
We do not hold the copyright of the images of old visualizations indexed by the OldVis project.
We have stored the rights information obtained from the data sources when available.
When the rights information requires attribution (e.g., when the image is licensed under [CC BY-NC-SA 3.0](https://creativecommons.org/licenses/by-nc-sa/3.0/)), you should attribute the original data source instead of us.
If you want to redistribute the images, you may check whether the images are in the [public domain](https://en.wikipedia.org/wiki/Public_domain) according to [copyright lengths](https://en.wikipedia.org/wiki/List_of_countries%27_copyright_lengths) and regulations in their country.
:::
