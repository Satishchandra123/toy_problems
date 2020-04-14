class LRUCache:
    def init(self,capacity):
        super().__init__()
        self.capacity = capacity
        self.cache = {}
        self.lru = {}
