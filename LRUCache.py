class LRUCache:

    def __init__(self,capacity):
        super().__init__()
        self.capacity = capacity
        self.cache = {}
        self.lru = {}

    def put(self,key,value):
        if key not in self.cache and len(self.cache) == self.capacity:
            old_key = min(self.lru.keys(), key = lambda k:self.lru[k])
            self.cache.pop(old_key)
            self.lru.pop(old_key)
        self.cache[key] = value
        self.lru[key] = 1
        return "put success"

    def get(self,key):
        if key in self.cache:
            self.lru[key] += 1
            return self.cache[key]
        else:
            print("Not there in cache")

    def get_cache(self):
        return self.cache

