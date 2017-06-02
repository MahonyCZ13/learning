# -*- coding: utf-8 -*-

import packages

train_df = packages.pd.read_csv('input/train.csv')
test_df = packages.pd.read_csv('input/test.csv')
combine = [train_df, test_df]

# Data manipulation function with grouping, sorting and mean values
print('Survived, grouped by class:' + '\r\n')
print(train_df[['Pclass', 'Survived']].groupby(['Pclass'], as_index=False).mean().sort_values(by='Survived', ascending=False))
print((20*'_')+'\r\n')

print('Survived, grouped by Sex:' + '\r\n')
print(train_df[['Sex', 'Survived']].groupby(['Sex'], as_index=False).mean().sort_values(by='Sex', ascending=False))
print((20*'_' + '\r\n'))

print('Survived, grouped by number siblings:' + '\r\n')
print(train_df[['SibSp', 'Survived']].groupby(['SibSp'], as_index=False).mean().sort_values(by='Survived', ascending=False))
print((20*'_' + '\r\n'))

print('Survived, grouped by Parch')
print(train_df[['Parch', 'Survived']].groupby(['Parch'], as_index=False).mean().sort_values(by='Survived', ascending=False))