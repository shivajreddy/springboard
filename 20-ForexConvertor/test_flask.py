from distutils.log import debug
from unittest import TestCase
from app import *
from flask import session

class FlaskTest1(TestCase):

    def test_homepage(self):
        with app.test_client() as client:
            res_home = client.get('/')
            home_html = res_home.get_data(as_text=True)
            test_html = "<h1>Forex Convertor</h1>"
        self.assertIn(test_html, home_html)
    
    def test_convert1(self):
        with app.test_client() as client:

            post_1 = client.post('/inputs', data={
                'input-from': 'USD',
                'input-to' : 'USD',
                'input-amount': 1
            })
            
            # Post request is sent
            self.assertEqual(post_1.status_code,302)

    # convert currency function tests
    def test_convert_currencty(self):
        self.assertEqual(convert_currency('USD','USD',1),f"This is USD converted to USD for total amout of 1")
        self.assertEqual(convert_currency('USD','USD',2),f"This is USD converted to USD for total amout of 2")

        