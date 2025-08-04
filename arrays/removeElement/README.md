# 🧹 Remove Element

Given an integer array `nums` and an integer `val`, remove **all occurrences** of `val` in-place. The order of the remaining elements **may be changed**.

Then return the number of elements in `nums` that are **not equal** to `val`.

---

## ✅ Requirements

- Modify the array `nums` **in-place** so that the **first `k` elements** are those not equal to `val`.
- The remaining elements beyond index `k` **do not matter**.
- Return the value `k`.

---

## 🧪 Custom Judge Logic

The system will run your code using:

```java
int[] nums = [...]; // Input array
int val = ...;      // Value to remove
int[] expectedNums = [...]; // Expected result (first k elements)

int k = removeElement(nums, val);

assert k == expectedNums.length;
sort(nums, 0, k); // Sort only the first k elements

for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
```


[🔗 Exercise Link](https://leetcode.com/problems/remove-element/description)