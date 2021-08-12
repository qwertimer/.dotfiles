

import json
from collections import OrderedDict


class JSONObject:
    def __init__(self, d):
        self.__dict__ = d


def json_ordereddict(file):
    data = json.load(file, object_pairs_hook=OrderedDict)
    return data

def json_obj(data)
    data = json.load(file, object_hook=JSONObject)
    return data

