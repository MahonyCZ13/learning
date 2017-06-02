# -*- coding: utf-8 -*-

import packages as pkg

train_df = pkg.pd.read_csv('input/train.csv')

# Who survived (1) and who not (0)
g = pkg.sns.FacetGrid(train_df, col='Survived')
g.map(pkg.plt.hist, 'Age', bins=20)

# Who survived (1) in what class (1,2,3) and who did not (0) in what class (1,2,3)
grid = pkg.sns.FacetGrid(train_df, col='Survived', row='Pclass', size=2.2, aspect=1.6)
grid.map(pkg.plt.hist, 'Age', alpha=.5, bins=20)
grid.add_legend();