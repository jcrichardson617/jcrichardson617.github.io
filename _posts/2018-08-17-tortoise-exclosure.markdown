---
layout: post
title: "The effects of herbivory by the gopher tortoise (*Gopherus polyphemus*) on plant community composition"
date: 2018-08-15
---

![](/images/tortoisegrass.png)

Animals may alter plants in a number of different ways. One of those ways is in changing the plant community composition - that is, the species present and the relative number of individuals per species. Prior to this experiment, we had no information on how this phenomenon was effected by reptiles, despite the prevalence of many herbivorous species.

I tested the question of "does gopher tortoise herbivoy have an effect on plant community composition?" using an exclosure plot on Egmont Key Florida. A fairly remote location ideal for this experiment as it is void of other herbivores. Any effect observed between controls and exclosures were [probably] from the tortoises.

I hypothesized that in the absence of tortoises, more individual plants would be present, as nothing is there to eat them back. But that there would be a decrease in species richness, and thus a decrease in diversity, because we've seen in other plant-herbivore systems a lack of herbivory typically allows one or two plant species to come in and take over. 

There were three types of plots established, a completely fenced exclosure plot, a control plot with two perpendicular sides of fencing, and a "super" control that had no fencing at all. This second control was established to test for any effects of the fencing material (metal roof flashing) on the plants (spoiler alert: none was found). Each plot type was replicated 5 times.

Seasonally, for a period of two years, I counted the number of plants down to species level in each of the plots. From here, several metrics were calculated in R for each plot in each season- the total number of individuals, the number of species, the Gini-Simpson diversity index, species dominance, and species evenness. 

Using generalized linear models, differences were examined:

* Between the two control types. No significant differences were ever found between the two controls, so they were collapsed into a single control type.

* Between exclosures and controls at the start of the experiment to ensure no differences were inherently present.

* Between the start and the end for each treatment.

* And between treatments at the end for each metric.

In the tables, E stands fr the exclosures, and C stands for controls.

Here's what was found:

#### Number of Individuals

Contrary to what was hypotehsized, the number of individuals remained relatively consistent.

![](/images/numbind.png)

| Comparison      | *X*<sup>2</sup>| *p*-value|
| :-------------  |:-------------: |:-----:   |
| Beginning E vs C| 0.5202         | 0.4707   |
| End E vs C      | 0.2915         | 0.5893   |
| E Start vs End  | 0.0141         | 0.9055   |
| C Start vs End  | 0.0011         | 0.9737   |

#### Species Richness

Species richness dropped through time in the absence of tortoises, and was lower in exclosures than in controls. But this drop was not statistically significant.

![](/images/richness.png)

| Comparison      | *X*<sup>2</sup>| *p*-value|
| :-------------  |:-------------: |:-----:   |
| Beginning E vs C| 0.1362         | 0.7172   |
| End E vs C      | 3.3698         | 0.0664   |
| E Start vs End  | 2.7922         | 0.0946   |
| C Start vs End  | 1.1312         | 0.7172   |

#### Gini-Simpson Diversity

As richness dropped, diversity dropped in turn. 

![](/images/diversity.png)

| Comparison      | *X*<sup>2</sup>| *p*-value|
| :-------------  |:-------------: |:-----:   |
| Beginning E vs C| 1.040          | 0.5945   |
| End E vs C      | 24.81          | <0.01    |
| E Start vs End  | 13.48          | <0.01    |
| C Start vs End  | 0.4071         | 0.5234   |

#### Species Dominance

Plots where tortoises were unable to feed had a higher species dominance. That is, one species appeared to be taking over. 

![](/images/dominance.png)

| Comparison      | *X*<sup>2</sup>| *p*-value|
| :-------------  |:-------------: |:-----:   |
| Beginning E vs C| 0.0136         | 0.9073   |
| End E vs C      | 27.26          | <0.01    |
| E Start vs End  | 17.35          | <0.01    |
| C Start vs End  | 0.0774         | 0.7809   |

#### Species Evenness

Plots where tortoises were unable to feed are less even, because of the increased dominance.  

![](/images/evenness.png)

| Comparison      | *X*<sup>2</sup>| *p*-value|
| :-------------  |:-------------: |:-----:   |
| Beginning E vs C| 0.4484         | 0.5031   |
| End E vs C      | 19.27          | <0.01    |
| E Start vs End  | 12.46          | <0.01    |
| C Start vs End  | 0.2406         | 0.6238   |


We can also break down looking at the number of individual species at the conclusion of the experiment

![](/images/speciesend.png)

I won't go into details for each species, but in both exclosure and control plots, *Heliotropium polyphyllum* (Hp) was the most common species, even more so in exclosures. *Fimbristylis cymosa* (Fc) abundance in exclosure plots significantly dropped when compared to control plots (*X*<sup>2</sup> = 8.7697, df = 1, *p* = 0.003063), and the abundance of *Polypremum procumbens* (Pp) was also reduced, although not significantly so. Several species appear to have been extirpated in tortoise exclosure plots; *Catharanthus roseus* (Cr), Mecardonia acuminata (Ma), and Paspalum setaceum (Ps). 

But plants are not just units, they vary in their weights as well. At the end of the experiment, everything was uprooted, cleaned, and weighed. Control are black and exclosures white, sorry for the inconsistency!

![](/images/mass.png)

In terms of biomass, at the end of the experiment *H. polyphyllum* dominated aboveground and belowground biomass in exclosure plots. However in control plots, *F. cymosa* had the highest biomass. While *P. procumbens* was the second most dominant plant in both plot types, its biomass was not nearly as great as *F. cymosa*. In fact the belowground biomass of *H. polyphyllum* was much greater than the belowground biomass of all other species combined. 

As you might expect, tortoise dietary preferences come into play in shaping all of this, but let's prove it! Tortoises were offered an equal amount of the five most prevalent plants, and their choices were analyzed with my R package selectapref. 

![](/images/diets.png)

Contrary to my original hypothesis, lack of tortoise herbivory did not cause a change in plant abundance in plots where tortoises were excluded from feeding. However, it did alter other aspects of the plant community diversity. Species richness dropped in exclosure plots as compared to control plots, though not significantly so. However, Gini-Simpson diversity and evenness significantly decreased, while dominance increased in the absence of tortoises, supporting my original hypothesis concerning effects on biodiversity. 

*H. polyphyllum* was the dominant species in terms of numbers and belowground biomass across both plot types. The extent of its dominance was greater in exclosure plots than in control plots. *F. cymosa* had greater biomass in control plots. As *H. polyphyllum* is preferred by tortoises over the other four most common plant species, it is likely that tortoises normally graze heavily on this plant, keeping it in lower abundances than would be observed in the absence of tortoise grazing. This consumption allows competitive release for other plant species and they increase in abundance and biomass. In exclosure plots, the increase in *H. polyphyllum* may explain the drastic decrease in abundance of *F. cymosa* and the extirpation of some the more rare plants. 

Full code available on my github account.
