using System;
using Unity.VisualScripting;
using UnityEngine;

class RandomWalk : MonoBehaviour
{
	[SerializeField] private GameObject Area;
	[SerializeField] private int numSteps;
	[SerializeField] private int step;
	[SerializeField] private GameObject startObj;
	[SerializeField] private GameObject[] perSetFlowers;
	[SerializeField] private int minFlowerAmount;
	[SerializeField] private int maxFlowerAmount;
	private GameObject[] areas;
	private int locationX;
	private int locationZ;
	private int previousStepX;
	private int previousStepZ;
	private int randomDirection;
	private bool genArea;

	private void Start()
	{
		step = (int)Area.transform.localScale.x;
		areas = new GameObject[numSteps];

		areas[0] = startObj;

		randomWalk();
	}

	private void randomWalk()
	{
		for (int i = 1; i < numSteps; i++)
		{
			randomDirection = UnityEngine.Random.Range(0, 4);

			switch(randomDirection)
			{
				case 0:
					locationX += step;

					break;
				case 1:
					locationX -= step;
					break;
				case 2:
					locationZ += step;
					break;
				case 3:
					locationZ -= step;
					break;
			}

			genArea = true;

			for (int j = 0; j < numSteps; j++)
			{
				if (areas[j] != null)
				{
					if (areas[j].transform.position.x == locationX && 
						areas[j].transform.position.z == locationZ)
					{
						genArea = false;
					}
				}
			}

			if (locationX > 0 || locationX < -310 ||
				locationZ > 0 || locationZ < -310)
			{
				genArea = false;
			}

			if (genArea)
			{
				Vector3 location = new Vector3(locationX, 0f, locationZ);
				GameObject newArea = Instantiate(Area, location, Quaternion.identity);
				areas[i] = newArea;


				previousStepX = locationX;
				previousStepZ = locationZ;

				spawnFlowers(newArea, i);
			}
			else
			{
				locationX = previousStepX;
				locationZ = previousStepZ;

				i--;
			}
		}
	}

	private void spawnFlowers(GameObject area, int flowerLevel)
	{
		int amount = UnityEngine.Random.Range(minFlowerAmount, maxFlowerAmount);
		Debug.Log(amount);
		for (int i = 0; i < amount; i++)
		{
			Quaternion randomRotation = UnityEngine.Random.rotation;
			int randomStep = UnityEngine.Random.Range(0, step / 2);
			Vector3 location = new Vector3(randomStep, 0f, 0f);

			GameObject newFlower = Instantiate(perSetFlowers[0], new Vector3(0f, 0f, 0f), randomRotation);
			newFlower.transform.position += newFlower.transform.TransformDirection(location);
			newFlower.transform.parent = area.transform;
		}
	}


	//private void spawnDoors()
	//{

	//	foreach(GameObject section in areas)
	//	{
	//		GameObject door1;

	//		for (int i = 0; i < areas.Length; i++)
	//		{

				
	//		}
	//	}
	//}
}
