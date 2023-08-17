# Dataset

Using [libquery](https://github.com/oldvis/libquery) and [libquery_extensions](https://github.com/oldvis/libquery_extensions) (see [querier](querier)), we query the data sources, filter the images, and process the metadata.
This way, we construct a dataset of 13K old visualization.
The data processing scripts and the constructed dataset can be found in [this repository](https://github.com/oldvis/dataset).

The dataset we have constructed can be downloaded with our Python package [oldvis_dataset](https://github.com/oldvis/oldvis_dataset) (see [downloader](downloader)).

## Data Sources

As of Jun 20, 2023, our dataset consists of old visualization from seven data sources.
The number of old visualizations we obtained from each data source is listed in the following table.

| Data Source                                                 | #Entries |
| ----------------------------------------------------------- | -------- |
| [David Rumsey Map Collection](https://www.davidrumsey.com/) | 7816     |
| [Internet Archive](https://archive.org/)                    | 2985     |
| [Gallica](https://gallica.bnf.fr/)                          | 2090     |
| [Telefact](https://modley-telefact-1939-1945.tumblr.com/)   | 225      |
| [Library of Congress](https://www.loc.gov/collections/)     | 212      |
| [British Library](https://www.bl.uk/)                       | 132      |
| [Alabama Maps](https://alabamamaps.ua.edu/)                 | 51       |
