#include<stdio.h>
#include<stdlib.h>
struct node * createnode(int value);
struct node
{
	int data;
	struct node *next;
};
void main()
{
	int value,choice =0,med=0;
	struct node *temp=NULL,*head=NULL,*newnode = NULL,*current = NULL;
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
	med = median(head);
	printf("\n the median is %d\n",med);
	temp = head;
	while(temp != NULL)
	{
		printf("%d\t",temp->data);
		temp= temp->next;
	}
	
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
int median(struct node *temp)
{
	struct node *temp1,*temp2;
	int val;
	temp1=temp2=temp;
	while(temp2!=NULL&&temp1!=NULL)
	{
		val = temp1->data; 
		temp1=temp1->next;
		if(temp1== NULL)
			return val;
		else
		   temp2 = (temp2->next)->next;
		if(temp2 != NULL)
		{
			 if(temp2->next ==NULL)
			return (temp1->data);
		}
		else
		{
		    
			val += temp1->data;
			return val/2;
		}
		 
	}
	 
}