#include<stdio.h>
#define N 100
int large(int a[],int n,int end[]);
void main()
{
	int a[N],n,i,end[2],sum;
	printf("\n Enter no of elements in array:");
	scanf("%d",&n);
	printf("\n Enter the array elements:");
	for(i=0;i<n;i++)
		scanf("%d",&a[i]);
	sum=large(a,n,end);
	printf("\n the largest sum is %d",sum);
	printf("\n the largest sum sub array is:\n");
	for(i = end[0];i<=end[1];i++)
		printf("%d\t",a[i]);
	
	
}
int large(int a[],int n,int end[])
{
	int sum=0,max=0,i,s=0;
	for(i=0;i<n;i++)
	{
		sum += a[i];
		if(sum >max)
		{
			max = sum;
			end[0] = s;
			end[1]=i;
		}
		else if(sum < 0)
		{
				sum =0;
				s = i+1;
		}
		
	}
	return max;
}