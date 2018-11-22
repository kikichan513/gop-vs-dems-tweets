import string
import csv

# strings = ["i love gun control abortion", "i hate pro choice", "fucking school shooting", "illegal citizenship", "juan loves kiki"]

class Classification: 
    def __init__(self):
        self.classification = {"Immigration": ["immigration", "immigrant", "border control", "citizenship", "asylum", "legal" "legal status", "immigration laws", "illegals", "illegal immigrants", "illegal citizens", "undocumented"], "Abortion": ["abortions", "abortion", "born alive", "pro-life", "pro-choice", "choice", "pro choice"], "GunControl":["gun", "control", "gun-control", "NRA", "school shooting", "shooting", "gun violence"], "Incarceration":["incarceration", "criminal", "prison", "jail"]}

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

if __name__ == "__main__":
    with open("classified.csv", 'a', newline='') as newcsv:
        writer = csv.writer(newcsv, delimiter=',')
        writer.writerow(["Key","Party", "Handle", "Tweet", "Sentiment", "Category"])
        with open("data.csv", "r") as f:
            issues = Classification();
            csvreader = csv.reader(f, delimiter=',')
            count = 0
            for party, handle, tweet, tweet_sentiment in csvreader:
                tweet_category = issues.classify(tweet)
                if tweet_category:
                    count+=1;
                    writer.writerow([count, party, handle, tweet, tweet_sentiment, tweet_category])


