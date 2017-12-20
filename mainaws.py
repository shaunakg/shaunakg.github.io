import requests

text = input("Sample Bot Text: ")

r = requests.post('https://hooks.slack.com/services/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', json={"text": text})
