
using UnityEngine;

public class moveFromAToB : MonoBehaviour
{
    [SerializeField] private GameObject a;
    [SerializeField] private GameObject b;
	[SerializeField] private Vector3 differenceVector;
	[SerializeField] private float distance;
	[SerializeField] private Vector3 direction;
    [SerializeField] private float speed = 4f;
	[SerializeField] private bool moveToA = false;

	void Start()
    {
        transform.position = a.transform.position; 
    }

    void Update()
    {
		if (moveToA)
		{
			differenceVector = a.transform.position - transform.position;
            transform.LookAt(a.transform.position);
        }
        else
        {
			differenceVector = b.transform.position - transform.position;
			transform.LookAt(b.transform.position);
		}

        distance = differenceVector.magnitude;
        direction = differenceVector.normalized;
        transform.position += direction * speed * Time.deltaTime;

        if (distance < speed * Time.deltaTime)
        {
            moveToA =!moveToA;
        }
	}
}
