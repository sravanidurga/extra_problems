#include<stdio.h>
#include<stdlib.h>
struct node * createnode(int value);
void printlist(struct node *head);
struct node * createlist(struct node *head,struct node *current);
struct node * sortmiss(struct node * head);
struct node
{
	int data;
	struct node *next;
};
void main()
{
	struct node *head=NULL,*curr = NULL;
	head=createlist(head,curr);
	printlist(head);
	head = sortmiss(head);
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
	printf("\n Enter your  choice(1-yes and 0-no) :\n");
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
struct node * sortmiss(struct node *head)
{
	struct node *temp1 = NULL,*temp=NULL,*prev = NULL,*futr = NULL,*curr = NULL,*curr1=NULL;
	temp = head;
	prev = head;
	futr = head;
	while(temp != NULL)
	{
		temp = temp->next;
		if(temp->data < prev->data)
			break;
		else
		{
			curr = prev;
			prev = prev->next;
		}
	}
	temp1 =curr1=temp;
	while(temp1 != NULL)
	{
		futr = temp1->next;
		if(futr== NULL)
			break;
		else if (temp1->data<futr->data)
		    break;
		else
		{
			curr1 = temp1;
			temp1 = temp1->next; 
		}
	}
	curr->next = temp1;
	if(temp1!= temp)
	   (curr->next)->next = temp;
	else 
        (curr->next)->next = temp1->next;
	curr1->next = prev;
	(curr1->next)->next = futr;
	return head;
}