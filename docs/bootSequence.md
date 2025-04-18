### ✨ Convergence Engine: Boot Sequence v0.1

**Purpose:**  
A development-aligned checklist for building the first working instance of the Convergence Engine, grounded in both immediate execution and long-term semantic structure.

This boot sequence reflects the dual goal:

- Ship an MVP that works
- Encode semantic meaning and flexibility from day one

---

### ✅ Phase 1: Core Object Setup

**1. Define `Convergence` Model (Code + Schema)**

- [ ] Create TypeScript interface in `types/convergence.ts`
- [ ] Define the semantic schema in `schemas/convergence.json`
  - Fields: `title`, `status`, `priority`, `horizon`, `activationScope`, `kinetic`, `createdAt`, `updatedAt`
  - Include prompts, displayAs, and allowedValues where appropriate

**2. Define and Seed Protocol Objects (Semantic Concepts)**

- [ ] Create semantic definitions for:
  - [ ] `Priority`
  - [ ] `Status`
  - [ ] `Horizon`
  - [ ] `ActivationScope`
- [ ] Store in `/schemas/protocol/*.json`
- [ ] Add basic seed data for each (e.g. `high`, `medium`, `low` priorities)

**3. Set Up In-Memory Store**

- [ ] Create generic `Store<T>` interface
- [ ] Implement `ConvergenceStore` using in-memory array
- [ ] Wire up `getAll()`, `create()`, `update()`, `delete()`

---

### ✅ Phase 1.5: Minimum Viable Personal System

**4. Add Time Awareness**

- [ ] Add `scheduledAt` field to `Convergence`
- [ ] Update semantic schema accordingly
- [ ] Create view sorted/grouped by `scheduledAt`
- [ ] Allow creating, editing, deleting timestamped tasks
- [ ] Show only upcoming Convergences (e.g. 7-day window)

---

### ✅ Phase 2: First Loop

**5. Display Convergences (UI)**

- [ ] Create page at `/` that lists `Convergences`
- [ ] Use `ConvergenceStore.getAll()` to pull data
- [ ] Render basic fields: `title`, `status`, `horizon`

**6. Seed First Convergence**

- [ ] Hardcode a convergence into `getAll()`
  - Example: `"Build the Convergence Engine MVP"`
  - Link it to `now`, `high`, `in-progress`, `active`

**7. Track Meta-Tasks Inside the System**

- [ ] Create a `Convergence` to represent importing the Genesis Protocol
- [ ] Create a `Convergence` to represent defining `priority`
- [ ] Create a `Convergence` for "Track my own evolution"

---

### 🌀 Phase 3: Recursive Introspection Begins

**8. Render Semantic Schema in UI (Optional Next Step)**

- [ ] Create dev-only route to inspect the schema
- [ ] Load from `schemas/convergence.json`
- [ ] List fields, prompts, types, constraints

**9. Begin Storing Semantic Schema as Data**

- [ ] Create a `SemanticField` or `FieldDefinition` object type
- [ ] Eventually migrate from JSON files to system-managed structure

---

### 🌟 Reminder: This is not just a task manager.

This is the first loop of a recursive, semantic system.  
It will evolve. This checklist brings it to life.

Once this checklist is complete, the system will:

- Contain its own core objects
- Track its own development
- Represent its own schema
- Be capable of evolving _itself_ through structured expression
