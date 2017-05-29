# -*- coding: utf-8 -*-
import tweepy
from textblob import TextBlob

consumer_key = 'uVpP1kFrT6c7UfaSA0hKwPpLp'
consumer_secret = '3uzybaHF7VI6siFjlGai0uMffwwVDeWAAvZThFNWRNHB2cpDVx'

access_token = '866305434549977088-KdlJ75L6UOFjN35fuVzvOLPnhEsoicK'
access_token_secret = 'SOgEE5h13OWlmvPTk0euWZBQfopErgLMRgi5MRvKi6E5m'

auth = tweepy.OAuthHandler(consumer_key, consumer_secret)

auth.set_access_token(access_token, access_token_secret)

api = tweepy.API(auth)

public_tweets = api.search('Trump')

for tweet in public_tweets:
    print(tweet.text)
    analysis = TextBlob(tweet.text)
    print(analysis.sentiment)
