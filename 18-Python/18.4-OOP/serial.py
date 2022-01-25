"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    # properties
    def __init__(self,start):
        """Choose your startning number for your serial"""
        self.start = start
        self.next = self.start
    
    # Methods
    def generate(self):
        """Generate a new serial number with the given start"""
        self.next += 1
        return self.next - 1

    def reset(self):
        self.next = self.start