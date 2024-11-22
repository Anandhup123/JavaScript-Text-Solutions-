# Electricity Bill Generator & Student Performance Analysis

This repository contains two JavaScript-based projects: **Electricity Bill Generator** and **Student Performance Analysis**. Below are the detailed descriptions and requirements for each task.

---

## Task 1: Electricity Bill Generator

### Description:
This web application calculates the electricity bill for different types of consumers based on the units consumed. The form captures essential details and calculates the bill according to specific rates and taxes.

### Requirements:
1. **Form Fields**:
   - Consumer Number
   - Consumer Name
   - Consumer Type (Household, Industrial, or Commercial)
   - Current Meter Reading
   - Previous Meter Reading

2. **Calculation Steps**:
   - Calculate units consumed:  
     `Units Consumed = Current Reading - Previous Reading`
   - Apply rate per unit based on consumer type:
     - **Household**:  
       - ₹2/unit (≤ 100 units)  
       - ₹3/unit (101-200 units)  
       - ₹4/unit (> 200 units)
     - **Industrial**:  
       - ₹5/unit (≤ 100 units)  
       - ₹6/unit (101-200 units)  
       - ₹7/unit (> 200 units)
     - **Commercial**:  
       - ₹8/unit (≤ 100 units)  
       - ₹9/unit (101-200 units)  
       - ₹10/unit (> 200 units)
   - Add 12% tax to the total bill amount.

3. **Output**:  
   When the "Generate Bill" button is clicked, the following details are displayed:
   - Consumer Name and Number
   - Type of Consumer
   - Units Consumed
   - Rate per Unit
   - Current Date
   - Total Bill Amount (including tax)

---

## Task 2: Student Performance Analysis

### Description:
This program analyzes student performance data to determine scholarship eligibility based on scores in Math, English, and Science.

### Eligibility Criteria:
1. **Age**: Must be 18 or older.
2. **Subject Scores**:
   - Science: ≥ 50
   - English: ≥ 60
3. **Overall Average**: Must be at least 70 across all subjects.

### Steps:
1. **Filter Eligible Students**: Identify students who meet all eligibility criteria.
2. **Calculate Average Scores**: Compute the average score across Math, English, and Science (rounded to two decimal places).
3. **Apply Bonus Points**: Add 5 bonus points if the student scored 90 or above in Math.
4. **Rank Students**: Rank eligible students based on their adjusted average scores in descending order.
5. **Calculate Total Sum**: Compute the total sum of all adjusted average scores.
6. **Generate Summary Report**: Display each student’s information:
   - Original Average Score
   - Adjusted Average Score
   - Scholarship Status Indicator (✅ if adjusted average ≥ 80; ❌ otherwise)

---

### Usage:
1. Clone the repository:
   ```bash
   git clone https://github.com/Anandhup123/JavaScript-Text-Solutions.git
