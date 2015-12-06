#include<stdio.h>
#include<stdlib.h>
struct node * createnode(int value);
void printlist(struct node *head);
struct node * createlist(struct node *head,struct node *current);
struct node * insert_node(struct node *head,int pos);
struct node
{
	int data;
	struct node *next;
};
void main()
{
	struct node *head=NULL,*curr=NULL;
	int pos;
	head=createlist(head,curr);
	printlist(head);
	printf("\n Enter the position where you want to insert node:");
	scanf("%d",&pos);
	head = insert_node(head,pos);
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
	current->next= head;
	return head;
}
void printlist(struct node *head)
{
	struct node *temp;
	temp=head;
	printf("\n the elements are:\n");
	do
	{
		printf("%d\t",temp->data);
		temp = temp->next;
	}while(temp!=head);
}
struct node * insert_node(struct node *head,int pos)
{
	struct node *temp = NULL,*link = NULL,*newnode = NULL;
	int count=1,value;
	printf("\n Enter the value :");
	scanf("%d",&value);
	temp = head;
	newnode = createnode(value);
	if(head == NULL)
	{
		newnode->next = head;
		head = newnode;
		return head;
	}
	if(pos == 1)
	{
		while(temp->next != head)
			temp = temp->next;
		newnode->next = head;
		head = newnode;
		temp->next = head;
		return head;
	}
	else
	{
		while(count <pos-1)
		{
			temp = temp->next;
			count++;
		}
		link = temp->next;
		temp->next = newnode;
		(temp->next)->next = link;
		return head;
	}

}