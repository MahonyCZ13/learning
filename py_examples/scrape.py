import re
import csv
from lxml import html
import requests

PAGE = requests.get('https://www.yr.no/place/Czech_Republic/Central_Bohemia/Odolena_Voda/')
TREE = html.fromstring(PAGE.content)

TEMP = TREE.xpath('//table[@class="yr-table yr-table-overview2 yr-popup-area"]//td[3]/text()')

LIST = []

for ITEM in TEMP:
    RESULT = re.sub(r'°', '', ITEM)
    LIST.append(RESULT)

print(LIST)


# DB
'''
import MySQLdb 
import os
try:
	db = MySQLdb.connect(host="localhost", user= dbuser, passwd=dbpwd, db = dbname)
	cur = db.cursor()
	db.close()
except MySQLdb.connect.Error as err:
	os.system("sudo service mysql restart")
	sleep(5)
# !konec kotroly pripojeni do DB	 
import os

db = MySQLdb.connect(host="localhost", user= dbuser, passwd=dbpwd, db = dbname)
cur = db.cursor()
cur.execute("UPDATE TAB_status SET measure_count = 20")
cur.execute("UPDATE TAB_times SET status = %s WHERE id = 1" % (stav_zasuvky_1))
cur.execute("UPDATE TAB_times SET status = %s WHERE id = 2" % (stav_zasuvky_2))
db.commit()
db.close() 
'''
#Cron Job
#https://askubuntu.com/a/2369