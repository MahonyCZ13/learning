# -*- coding: utf-8 -*-

import packages

train_df = packages.pd.read_csv('input/train.csv')
test_df = packages.pd.read_csv('input/test.csv')
combine = [train_df, test_df]

# prints the values of the columns
print(train_df.columns.values)

# prints first 5 items
print(train_df.head())

# prints last 5 items
print(train_df.tail())


# prints information about data
train_df.info()
print('_'*40)
test_df.info()

# basic description of data (medians, count etc...)
print(train_df.describe())