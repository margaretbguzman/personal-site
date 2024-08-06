import pymysql

print('begin')
cxn = pymysql.connect(host='localhost',
                             user='margaret',
                             password='reg-Users1998',
                             database='registered_users',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor)

csr = cxn.cursor()