import pymysql

print('begin')
cxn = pymysql.connect(host='margaretbguzman.com',
                             user='margaret',
                             password='reg-Users1998',
                             database='registered_users',
                             port=2222,
                             charset='utf8mb4')

csr = cxn.cursor()