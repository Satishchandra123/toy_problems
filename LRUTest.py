from LRUCache import *
def main():
    obj = LRUCache(5)
    assert obj.put(1,"Satish") == "put success"
    assert obj.put(2,"Chandra") == "put success"
    assert obj.put(3,"Nikhil") == "put success"
    assert obj.get(1) == "Satish"
    assert obj.get(2) == "Chandra"
    assert obj.get(2) == "Chandra"
    assert obj.put(4,"Ravi") == "put success"
    assert obj.put(5, "Teja") == "put success"
    assert obj.put(6, "Aravind") == "put success"
    assert obj.put(7, "Abhiram") == "put success"
    assert obj.get_cache() == {1:'Satish',2:'Chandra',5:'Teja',6:'Aravind',7:'Abhiram'}
    print("all test cases passed")

if __name__ == "__main__":
    main()
