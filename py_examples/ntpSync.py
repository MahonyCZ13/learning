import os
import time
import ntplib
client = ntplib.NTPClient()
response = client.request('pool.ntp.org')
os.system('sudo date ' + time.strftime('%m%d%H%M%Y.%S',time.localtime(response.tx_time)))
os.system("sudo hwclock --systohc")
