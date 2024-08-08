# DevZero docs style guide

1. Images should have descriptive alt description

   Wrong:
      ```
   ![](image.png)
   ```
      Correct:
      ```
   ![a giraffe](image.png)
   ```

2. Prefer code-blocks (```) instead of code-formatting (`)
   Wrong:

   `ssh root@example.com`

   Correct:

   ```
   ssh root@example.com
   ```

3. Shell commands should not have syntax highlighting

    Wrong:
       ```sh
    ssh root@example.com
    ```
       Correct:
       ```
    ssh root@example.com
    ```

4. No bold dot

   Wrong:

   **End of sentence.**

   Correct:

   **End of sentence**.

5. Navigation

   Example:

   **Dashboard > Create new recipe**

   ```
   **Dashboard > Create new recipe**
   ```

6. Buttons/Dropdowns/Fields

   Use respective labels to refer to input elements.

   Example:
     Click on "Create new recipe". Select "Operating System". Type into the "Search" field.
