from unittest import TestCase
from app import app
from flask import session
from boggle import Boggle


class FlaskTests(TestCase):
        
    def test_homepage(self):
        with app.test_client() as client:
            res = client.get('/')
            test_html = "<h1>THIS IS BOGGLE GAME</h1>"
            self.assertIn(res.get_data(as_text=True), test_html)

