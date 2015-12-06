#include<stdio.h>
#include<stdlib.h>
struct node * createnode(int value);
void printlist(struct node *head);
struct node * createlist(struct node *head,struct node *current);
struct node * add(struct node *head1, struct node *head2);
struct node
{
	int data;
	struct node *next;
};
void main()
{
	struct node *head1=NULL,*head2=NULL,*head=NULL,*current1 = NULL,*current2=NULL;
	head1 = createlist(head1,current1);
	head2 = createlist(head2,current2);
	printlist(head1);
	printlist(head2);
	head = add(head1,head2);
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
struct node * add(struct node *head1, struct node *head2)
{
	struct node *temp1=NULL,*temp2 = NULL,*curr1 = NULL;
	temp1 =curr1= head1;
	temp2 = head2;
	while(temp1 != NULL && temp2 != NULL)
	{
		temp1->data = temp1->data + temp2->data;
		temp1 = temp1->next;
		temp2 = temp2->next;
		if(temp1 != NULL)
			curr1 = curr1->next;
	}
	if(temp1 == NULL && temp2 == NULL || temp2 == NULL)
		return head1;
	else if(temp1 == NULL)
	{
		curr1->next = temp2;
		return head1;
	}
}