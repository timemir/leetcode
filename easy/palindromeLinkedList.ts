/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function isPalindrome(head: ListNode | null): boolean {
    const values = [];
    let currNode = head;

    // Go over the LinkedList and add all its values to the values array
    while (currNode) {
        values.push(currNode.val);
        currNode = currNode.next;
    }

    // Check if the values array is a palindrome
    // with multiple pointer approach
    let pointer1 = 0;
    let pointer2 = values.length - 1;
    let check = true;

    for (let i = 0; i < values.length / 2; i++) {
        if (values[pointer1++] !== values[pointer2--]) {
            check = false;
        }
    }

    return check;
}
