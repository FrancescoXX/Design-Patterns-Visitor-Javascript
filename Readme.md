# Visitor Pattern 
## Behavioral Design Pattern

___

## 📌Introduction
Visitor is a simple behavioral design pattern. 

It gives a way to easily separate an algorithm from an object structure.

It is also useful to visit complex objects structures.

___

## ⚡️In short
Allows adding new functions, without modifying existing classes. 

We create a visitor class/function, that implements the specializations of the virtual function. 

The visitor takes the instance reference as input, and implements the goal through double dispatch.

___


## 💡Intent
Separate algorithms from the objects on which they operate.

___


## 🔧 Apply (when we want to)
- Visit complex objects structure (inheritance)
- Perform operations based upon concrete classes
- Avoid pollution of concrete classes with many different operations
- Have the ability to easily define new operations, without changing concrete classes

___


## ✅Pro
- Open/Closed Principle (software entities should be open for extension, but closed for modification).
- Separates operations that don't belong together.
- Accumulate state: Visitors can mantain state across the hierarchy

___

## ⚠️Cons
- Breaks encapsulation
- Adding new concrete elements is hard
- Requires a new method for all concrete visistors
- Rely on the interface of the concrete element (might lack the access to the object's private fields)

___

## 🏆 Great for
- Visit complex object structure
- Change existing object without breaking the current structure
- Centralize logic
___