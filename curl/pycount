# PYTHON COUNTER - WEBSITE cURL EDITION
# REPOSITORY: https://goo.gl/eX7yAr

import time
art = """\

+----------------------------------------------------------------------+
|                             COUNTING UP                              |
|                           Version 1.0 Beta                           |
|                   Please follow the prompts below                    |
|                       Made by @jacksonsevendelta                     |
+----------------------------------------------------------------------+
(cURL Edition: repository available at https://goo.gl/eX7yAr)
"""

print(art)
num = 0

upto = input('Choose a number to count up to (default 100): ')
if upto=='':
        upto=100
        print('No input entered, default value used: 100')
upto = float(upto)

incr = input('Choose an increment value (default 1): ')
if incr=='':
        incr=1
        print('No input entered, default value used: 1')
incr = float(incr)

if incr>upto:
	print("")
	print("--- an error occurred ---")
	print('Warning! Your increment value is more than the value')
	print('to count up to! This program may fail or glitch.')
	non = input('Press ENTER to continue or CTRL+C to abort...')

wait = input('Choose the seconds to wait before moving on (default 0.1): ')
if wait=='':
        wait=0.1
        print('No input entered, default value used: 0.1')
wait = float(wait)
if wait<0.01:
	wait = 0.01
	print("")
	print("--- an error occurred ---")
	print("The TIME module used in this program can go down to 0.01 seconds of time.")
	print("You entered " + str(wait) + ". As a result, your time has been set to 0.01 seconds")
	print("to prevent errors.")
	print("")
	non1 = input('Press ENTER to continue or CTRL+C to abort...')

print('')
print('---STARTING COUNT-UP---')
try:
        while True:
                time.sleep(wait)
                print(num)
                num=num+incr
                while num>upto:
                        num = num-upto
                        times = 1
                        while times>0:
                                print("Number reached! Resetting count-up!")
                                time.sleep(0.1)
                                times = times-1
except KeyboardInterrupt:
        print("")
        non = input('Interrupted! Press ENTER to exit.')
        print('Thank you for using this program. Made in Python, by @jacksonsevendelta on GitHub.')
        print('Modules/packages used: time module')

		
	
