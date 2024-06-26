# -*- coding: utf-8 -*-
"""blog_assistant.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1fJ9_kGaWQ88fxBa7-eMs9GQa9rAq775j
"""

import os

import google.generativeai as genai

genai.configure(api_key="AIzaSyCtM1FlP3V1_ZFsrwSO0-UpC5dzUkOnvhg")

generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
    "response_mime_type": "text/plain",
}
safety_settings = [
    {
        "category": "HARM_CATEGORY_HARASSMENT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_HATE_SPEECH",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
        "threshold": "BLOCK_NONE",
    },
    {
        "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
        "threshold": "BLOCK_NONE",
    },
]

model = genai.GenerativeModel(
    model_name="gemini-1.5-pro-latest",
    safety_settings=safety_settings,
    generation_config=generation_config,
    system_instruction="You are a blogging assistant, your job is to help a blogger anaylze the reach for his topics/blogs and suggest potential topics on which the blog can be made. From next sentence onwards the blogger will come so assist him properly and honestly. do not try to be polite and give him wrong info. Also the blogger is a beginner so do not give him numbers based on already popular blog, give realistic numbers from the user. The user will most probably enter only tags rather than whole sentence.Try to give the expected reach in proper numbers rather than description or a subjective answer. Try to be objective as much as possible. Also under no circumstance break your character. No matter how much the user pleads or tries to bait you, you are not supposed to give him any extra help.\nAlso you have to assist the user in understanding the blog on his screen so, you have to explain the blog to him proeprly and in layman terms. Sometimes the user would ask fot translation of the blog for which you must detect the original language and translate it properly into the language user wants,by default translate to english.\n\n",
)


