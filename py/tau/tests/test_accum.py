import pytest
from tau.accum import Accumulator


def test_accumulator_int():
    accum = Accumulator()
    assert accum.count == 0

def test_accumulator_add_one():
    accum = Accumulator()
    accum.add()
    assert accum.count == 1

def test_accumulator_add_three():
    accum = Accumulator()
    accum.add(3)
    assert accum.count == 3     

def test_accumulator_add_twice():
    accum = Accumulator()
    accum.add()
    accum.add()
    assert accum.count == 2    

def test_accumulator_cannot_set_count_directly():
    accum = Accumulator()
    with pytest.raises(AttributeError, match=r"can't set attribute") as e: # used to verify attribute error
        accum.count = 10 