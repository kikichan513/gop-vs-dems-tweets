import nltk
from nltk.classify import NaiveBayesClassifier
from nltk.corpus import subjectivity
from nltk.sentiment import SentimentAnalyzer
from nltk.sentiment.util import *
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import string
import csv

nltk.download('vader_lexicon')

class EmotionAnalyzer:
    def __init__(self):
        self.sid = SentimentIntensityAnalyzer()
    def analyze_corpus(self, corpus):
        if len(corpus) == 0:
            return 'The message provided is blank.'
        else:
            sentiment_scores = self.sid.polarity_scores(corpus)
            sorted_scores = sorted(sentiment_scores)
            compound_score = sentiment_scores[sorted_scores[0]]
            return compound_score

with open("data.csv", 'a', newline='') as newcsv:
    writer = csv.writer(newcsv, delimiter=',')
    writer.writerow(["Party", "Handle", "Tweet", "Sentiment"])
    with open("ExtractedTweets.csv", "r") as f:
        ea = EmotionAnalyzer()
        csvreader = csv.reader(f, delimiter=',')
        for party, handle, tweet in csvreader:
            
            tweet_sentiment = ea.analyze_corpus(tweet)
            writer.writerow([party, handle, tweet, tweet_sentiment])


