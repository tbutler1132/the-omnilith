### 🪐 Convergence Engine: Genesis Protocol v0.1

**Purpose:**  
To define the seed-level principles, constraints, and requirements that will guide the creation of the Convergence Engine until it can govern and evolve itself.

---

### I. Guiding Principle

> **This system is recursive, semantic, and evolving.**  
> It is not simply a task engine — it is a protocol for expressing, organizing, and managing intention.  
> The task engine is its first manifestation. Its purpose is to build itself.

---

### II. Constraints

While the system is being built _from the outside_, the following constraints must be respected:

1. **All meaningful concepts are semantically represented.**  
   Even if not exposed to the user, their definitions must be recorded in config or schema.

2. **First-class fields must be defined semantically, even if stored minimally.**  
   For example, fields like `kinetic` should be documented with their meaning and behavior, even if just a boolean at first.

3. **Customization is deferred, not denied.**  
   The system may be locked to a specific configuration, but it must be _built in a way that allows unlocking_ later.

4. **The semantic schema and protocol layer must be designed as a future source of truth.**  
   TypeScript and DB schemas should reflect semantic structure, not invent their own rules.

5. **The system must eventually be able to manage itself.**  
   Even if the MVP is brute-forced, all future extensions must be designed with recursive self-governance in mind.

---

### III. Immediate Goals (Checklist for MVP Boot Sequence)

- [ ] Define and manage `Convergences` (core task objects)
- [ ] Represent and enforce `Horizon`, `Status`, `ActivationScope`, and `Priority` as structured objects
- [ ] Accept user input to create and manipulate Convergences
- [ ] Display Convergences filtered/grouped by semantic criteria
- [ ] Allow internal tracking of changes to the engine itself (i.e., “meta Convergences”)

---

### IV. Forbidden Until Self-Governed

To prevent premature complexity:

- ❌ No custom user-created schemas or fields (yet)
- ❌ No plugin system
- ❌ No arbitrary field-level logic beyond what is defined semantically

These are allowed _only once the engine can reason about them_ from within itself.

---

### V. Transition Plan

Once the engine is capable of managing its own schema, priorities, and views:

- This document will be encoded as the **first internal artifact**
- The system will shift from **externally driven** to **self-managing**
- The Genesis Protocol will be versioned into the system’s internal `protocol.timeline`

---

### VI. Naming Convention

- A task is called a **Convergence**
- A field is called a **SemanticField**
- The whole structure is referred to as the **Convergence Engine**

---

### VII. Development Mode

In development, the creator may use any temporary tools or systems to accelerate progress, but must track **all decisions made outside the engine** for future convergence.
