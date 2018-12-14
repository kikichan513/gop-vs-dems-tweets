import string
import csv
import random

# strings = ["i love gun control abortion", "i hate pro choice", "fucking school shooting", "illegal citizenship", "juan loves kiki"]

class Classification: 
    def __init__(self):
        self.classification = {"Immigration": ["immigration", "immigrant", "border control", "citizenship", "asylum", "legal" "legal status", "immigration laws", "illegals", "illegal immigrants", "illegal citizens", "undocumented", "deport", "#immigration","ICE", "ice", "#ICE", "caravan"], "Abortion": ["abortions", "abortion", "born alive", "pro-life", "pro-choice", "choice", "pro choice", "pro life", "killing babies", "planned parenthood", "feticide","birth", "IUD", "contraceptive", "Roe", "reproductive", "#plannedparenthood", "Medicade", "abortion"], "GunControl":["gun", "control", "gun-control", "NRA", "school shooting", "shooting", "gun", "semi-automatics", "assault", "weapons", "handgun", "#guncontrol"], "Incarceration":["incarceration", "criminal", "prison", "jail", "internment","jailed", "imprisonment", "confinement", "detention", "#incarceration", "colorblindness","#PrisonReform", "juveniles","solidarity", "policing"]}

    def classify(self, tweet):
        dic = dict()
        tweet = set(tweet.lower().split())
        for category in self.classification:
            if tweet.intersection(self.classification[category]):
                if category in dic:
                    dic[category] += 1
                else:
                    dic[category] = 1
        if dic:
            return max(dic, key=dic.get)
        else:
            return False

def testscript():
    issues = Classification();
    for i in strings:
        category = issues.classify(i)
        if category:
            print ("not false")
        else:
            print ("false")

def randomChoice():
    if (random.randint(1,8)) == 2:
        return True
    else:
        return False

if __name__ == "__main__":
    with open("final.csv", 'a', newline='') as newcsv:
        writer = csv.writer(newcsv, delimiter=',')
        writer.writerow(["Id","Party", "Handle", "Tweet", "Sentiment", "Category"])
        maxnum = []
        with open("data.csv", "r") as f:
            issues = Classification();
            csvreader = csv.reader(f, delimiter=',')
            count = 0
            try:
                for party, handle, tweet, tweet_sentiment in csvreader:
                    tweet_category = issues.classify(tweet)
                    if tweet_category and tweet_sentiment != "0.0":
                        if len(tweet) != 140 :
                            writer.writerow([count, party, handle, tweet, tweet_sentiment, tweet_category])                     
                        elif randomChoice():
                            writer.writerow([count, party, handle, tweet, tweet_sentiment, tweet_category])
            except ValueError:
                pass


