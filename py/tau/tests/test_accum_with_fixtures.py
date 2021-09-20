import pytest
from tau.accum import Accumulator

@pytest.fixture
def accum():
    return Accumulator()


def test_accumulator_int(accum):
    assert accum.count == 0

def test_accumulator_add_one(accum):
    accum.add()
    assert accum.count == 1

def test_accumulator_add_three(accum):
    accum.add(3)
    assert accum.count == 3     

def test_accumulator_add_twice(accum):
    accum.add()
    accum.add()
    assert accum.count == 2    

def test_accumulator_cannot_set_count_directly(accum):
    with pytest.raises(AttributeError, match=r"can't set attribute") as e: # used to verify attribute error
        accum.count = 10 