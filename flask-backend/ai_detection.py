import pickle
filename = './models/ai_detection_model.sav'
ensemble = pickle.load(open(filename, 'rb'))

def dummy(text):
    return text
def pred(st,model):
    from sklearn.feature_extraction.text import TfidfVectorizer

    from tokenizers import (
        decoders,
        models,
        normalizers,
        pre_tokenizers,
        processors,
        trainers,
        Tokenizer,
    )
    LOWERCASE = False
    VOCAB_SIZE = 30522
    from datasets import Dataset
    from tqdm.auto import tqdm

    from transformers import PreTrainedTokenizerFast
    raw_tokenizer = Tokenizer(models.BPE(unk_token="[UNK]"))
    # Adding normalization and pre_tokenizer
    raw_tokenizer.normalizer = normalizers.Sequence([normalizers.NFC()] + [normalizers.Lowercase()] if LOWERCASE else [])
    raw_tokenizer.pre_tokenizer = pre_tokenizers.ByteLevel()
    special_tokens = ["[UNK]", "[PAD]", "[CLS]", "[SEP]", "[MASK]"]
    trainer = trainers.BpeTrainer(vocab_size=VOCAB_SIZE, special_tokens=special_tokens)
    raw_tokenizer = pickle.load(open("./models/raw_vectorizer.pk", 'rb'))
    print("3")
    tokenizer = PreTrainedTokenizerFast(
        tokenizer_object=raw_tokenizer,
        unk_token="[UNK]",
        pad_token="[PAD]",
        cls_token="[CLS]",
        sep_token="[SEP]",
        mask_token="[MASK]",
    )

    tokenized_texts_test = []
    import pandas as pd
    st=pd.Series(st)
    for text in tqdm(st.tolist()):
        tokenized_texts_test.append(tokenizer.tokenize(text))
    vectorizer = TfidfVectorizer(ngram_range=(3, 5), lowercase=False, sublinear_tf=True, analyzer = 'word',
    tokenizer = dummy,
    preprocessor = dummy,
    token_pattern = None, strip_accents='unicode'
                            )
    vectorizer = pickle.load(open("./models/vectorizer.pk", 'rb'))


    vocab = vectorizer.vocabulary_
    vectorizer = TfidfVectorizer(ngram_range=(3, 5), lowercase=False, sublinear_tf=True, vocabulary=vocab,
                            analyzer = 'word',
                            tokenizer = dummy,
                            preprocessor = dummy,
                            token_pattern = None, strip_accents='unicode'
                            )
    vectorizer = pickle.load(open("./models/vectorizer_1.pk", 'rb'))


    tf_test = vectorizer.transform(tokenized_texts_test)
    final_preds = model.predict_proba(tf_test)[:,1]
    return final_preds[0]


pred("Hello hello nice to meet you, the voice inside my head",ensemble)