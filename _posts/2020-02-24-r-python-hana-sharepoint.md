---
layout: post
title: "Using R and Python to connect to HANA and Sharepoint"
date: 2020-02-24
---

One of the most difficult aspects of my job is connecting to external data sources. When I first arrived, it seems the only database-to-software link that existed was from SAP HANA to Tableau. Through trial and error, I eventually made an Rstudio-HANA connection (another post for another time) to suit my needs as well. Sometimes the Tableau/HANA connection is all I need.

#### Two different data sources in Tableau

I got a request one day that was relatively straight forward - "Let us know how many of these shipment numbers in this Sharepoint List match up to our master list of shipment numbers" amongst some other details I can't go into.

Some quick googling revealed Tableau can connect to Sharepoint Lists and I already knew I had a HANA table with this info as well, sounded like a simple left join. A meeting of the mind between myself and our Sharepoint guru got that connection working, but it turns out Tableau cannot do this type of join on two separate data sources, it can only do a pseudojoin. This prevented me from doing everything in Tableau. 

#### Get data in R then import into Tableau

My next plan was to import both data sources into R then do a proper join in there. I had the HANA connection already down pat, so that was half the battle. Some quick Googling revealed an excellent package [sharepointR](https://github.com/LukasK13/sharepointr). Well... As you can see from [this issue](https://github.com/LukasK13/sharepointr/issues/6) it just did not want to work for me. So I needed another way to connect to Sharepoint. 

### Google. A data scientists best friend.

Another trip back to google revealed Python has some libraries for connecting to Sharepoint Lists. Shareplum worked best for me so I went with that. 

I did not want to run python, save the extract and reupload into R to join with the HANA data, so I quickly taught myself the basics of running python within R and came up with a nifty R markdown script to pull in the Sharepoint data with python.

```
---
title: "SP_pull"
output: html_document
---

```{r setup, include = FALSE}
library(reticulate)
use_python("C:/path/python3.exe")
# use_virtualenv(r-reticulate)

```


```{python}

from shareplum import Site
from shareplum import Office365
import pandas as pd


authcookie = Office365('https://COMPANYSITE.sharepoint.com', username='user', password='pass').GetCookies()
site = Site('https://COMPANYSITE.sharepoint.com/Distribution/', authcookie=authcookie)
sp_list = site.List('Hazardous Material Disclosure Statement')
data = sp_list.GetListItems()

data = pd.DataFrame(data)

data = data[['Date','Drivers Name', 'Shipment number', 'DSD Location']]

```

Save as R df

```{r}
SP.shipments <- py$data
```


```

Was then just as simple as importing the HANA data in a new R script (or it could've been done in here) and using ```left_join``` from ```dplyr```, then writing to a csv which gets picked up and refreshes weekly in Tableau. 
