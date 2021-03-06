setwd("d:\\")

#### BTS
rawdat <- read.csv("CPUE per length per Hour and Swept Area_2018-03-08 14_15_14.csv")
names(rawdat)
nrow(rawdat)
fdat <- rawdat[rawdat$AphiaID %in% c(127160,127143,105883),]
nrow(fdat)
fdat <- fdat[fdat$ICESArea %in% c("IVa","IVb","IVc"),]
nrow(fdat)
write.csv(fdat,"CPUE per length per Hour and Swept Area_2018-03-08 14_15_14_filtered.csv")

#### IBTS
rawdat <- read.csv("CPUE per length per haul_2018-03-09 21_20_34.csv")
names(rawdat)
nrow(rawdat)
fdat <- rawdat[rawdat$AphiaID %in% c(127160,127143,105883),]
nrow(fdat)
write.csv(fdat,"CPUE per length per haul_2018-03-09 21_20_34_filtered.csv")

