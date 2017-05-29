# -*- coding: utf-8 -*-

from sklearn import tree

# [height, weight, show size]
X = [[181,80,44], [177, 70, 43], [160,60,38], [154,54,37], [166,65,40], [190,90,47], [175,64,39], [177,70,40], [159,55,37], [171,75,42], [181,85,43]]

Y = ['male', 'female', 'female', 'female', 'male', 'male', 'male', 'female', 'male', 'female', 'male']

clf = tree.DecisionTreeClassifier()

clf = clf.fit(X, Y)

print('Enter height, weight and shoe size to predict the gender.')
userInput = input('Like "190,80,41" without quotation makrs: ')

prediction = clf.predict([[190,70,43]])

print(prediction)
