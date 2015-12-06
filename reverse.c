#include<stdio.h>
#include<stdlib.h>
struct node * createnode(int value);
void printlist(struct node *head);
struct node * createlist(struct node *head,struct node *current);
struct node * reverse(struct node * head,struct node *temp,struct node *curr,struct node *prev);
struct node
{
	int data;
	struct node *next;
};
void main()
{
	struct node *head= NULL,*curr = NULL,*temp = NULL,*prev = NULL;
	head = createlist(head,curr);
	printlist(head);
	temp=curr = head;
	head = reverse(head,temp,curr,prev);
	printlist(head);
}
struct node * createnode(int value)
{
	struct node *temp;
	temp = (struct node *)malloc(sizeof(struct node));
	if(temp != NULL)
	{
		temp->data = value;
		temp->next = NULL;
	}
	return temp;
		
}
struct node * createlist(struct node *head,struct node *current)
{
	struct node *newnode =NULL;
	int value,choice;
	printf("\n Enter the new list elements\n");
	do
	{
	printf("\n Enter the value:");
	scanf("%d",&value);
    newnode = createnode(value);
	if(head ==NULL)
	{
		head = newnode;
		current = newnode;
	}
	else
	{
	   current->next = newnode;
	   current = newnode;
	}
	printf("\n Enter your choice(1-yes and 0-no) :\n");
	scanf("%d",&choice);
	}while(choice==1);
	return head;
}
void printlist(struct node *head)
{
	struct node *temp;
	temp=head;
	printf("\n the elements are:\n");
	while(temp != NULL)
	{
		printf("%d\t",temp->data);
		temp = temp->next;
	}
}
struct node * reverse(struct node * head,struct node *temp,struct node *curr,struct node *prev)
{
		if(temp != NULL)
		{
			curr = temp;
			if(temp->next == NULL)
				head = temp;
			temp = temp->next;
			curr->next = prev;
			prev= curr;
			head = reverse(head,temp,curr,prev);
		}
		return head;
}